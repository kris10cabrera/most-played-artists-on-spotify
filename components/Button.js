import { useEffect, useState } from "react";
import Box from "./Box";
import { generateCodeVerifier, generateCodeChallenge } from "../lib/spotify";

export default function Button({ fetchUser }) {
  const [button, showButton] = useState(true);
  const scope = `user-top-read`;

  const login = () => {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = generateCodeChallenge(codeVerifier);
    
    const authUrl = new URL('https://accounts.spotify.com/authorize');
    const params = {
      response_type: 'code',
      client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
      redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
      scope,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
    };
    
    authUrl.search = new URLSearchParams(params).toString();
    
    // Store code verifier for later use
    localStorage.setItem('spotify_code_verifier', codeVerifier);
    
    let popup = window.open(
      authUrl.toString(),
      "Login with Spotify",
      "width=800,height=600"
    );
    
    window.spotifyCallback = async (payload) => {
      popup.close();

      try {
        const codeVerifier = localStorage.getItem('spotify_code_verifier');
        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
            grant_type: 'authorization_code',
            code: payload,
            redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
            code_verifier: codeVerifier,
          }),
        });

        const { access_token } = await tokenResponse.json();

        const response = await fetch(
          `https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=50`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        const data = await response.json();
        const { items } = data;
        showButton(false);
        const genres = Array.from(
          new Set(items.map((item) => item.genres).flat())
        );
        const artists = items.map((item) => ({
          artist: item.name,
          image: item.images[1].url,
          url: item.external_urls["spotify"],
        }));

        fetchUser({ artists, genres });
        
        // Clean up
        localStorage.removeItem('spotify_code_verifier');
      } catch (error) {
        console.error('Authentication error', error);
      }
    };
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      window.opener.spotifyCallback(code);
    }
  }, []);

  return (
    <Box
      as="button"
      onClick={login}
      css={{
        cursor: "pointer",
        padding: 10,
        zIndex: 9,
        alignSelf: "flex-start",
        fontFamily: "FT88 Gothique",
        position: "relative",
        display: button ? "block" : "none",
        textShadow: "0px 0px 17px #0031ff",
        letterSpacing: 2,
        fontSize: 26,
        backgroundColor: "#cdcdcd",
        color: "blue",
        border: "2px outset",
        borderRightColor: "#c4c4c4",
        borderTopColor: "#c4c4c4",
        borderBottomColor: "#ccc",
        borderLeftColor: "#fff",
        transition: "transform 200ms, background-color 200ms",
        "@bp0-max": {
          fontSize: 20,
          padding: 5,
        },
        "&:active": {
          transform: "translateY(2px)",
          backgroundColor: "#a7a7a7",
        },
      }}
    >
      login with spotify to view yours!
    </Box>
  );
}
import { useEffect, useState } from "react";
import Box from "./Box";

export default function Button({ fetchUser }) {
  const [button, showButton] = useState(true);
  const scope = `user-top-read`;
  const AUTHORIZATION_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&scope=${scope}&show_dialog=true`;

  const login = () => {
    let popup = window.open(
      AUTHORIZATION_URL,
      "Login with Spotify",
      "width=800,height=600"
    );
    window.spotifyCallback = (payload) => {
      popup.close();

      fetch(
        `https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=50`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${payload}`,
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
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
        });
    };
  };

  useEffect(() => {
    const token = window.location.hash.substr(1).split("&")[0].split("=")[1];
    if (token) {
      window.opener.spotifyCallback(token);
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

import { useEffect } from "react";
import Box from "./base/Box";

export default function Button({ fetchUser }) {
  const client_id = `ad145c69010649da928b415e62ba0343`;
  const redirect_uri = `http://localhost:3000/`;
  const scope = `user-top-read`;
  const AUTHORIZATION_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}&show_dialog=true`;
  console.log("auth url ", AUTHORIZATION_URL);
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

          const artists = items.map((item) => ({
            artist: item.name,
            image: item.images[1].url,
            url: item.external_urls["spotify"],
          }));

          fetchUser(artists);
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
        display: "block",
        letterSpacing: 2,
        fontSize: 16,
        backgroundColor: "#efefef",
        color: "#000",
        "@bp0-max": {
          fontSize: 14,
        },
      }}
    >
      login with spotify to view yours
    </Box>
  );
}

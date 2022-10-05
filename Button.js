import { useEffect, useState } from "react";

export default function Button({ fetchUser }) {
  const [button, showButton] = useState(true);
  const client_id = `2d344a5e84574758b5be558ecf4b6232`;
  const redirect_uri = `https://favorite-artists.vercel.app/`;
  const scopes = `user-top-read`;
  const AUTHORIZATION_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scopes}&show_dialog=true`;
  const login = () => {
    let popup = window.open(
      AUTHORIZATION_URL,
      "Login with Spotify",
      "width=800,height=600"
    );
    window.spotifyCallback = (access_token) => {
      popup.close();
      fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { items } = data;
          showButton(false);
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
    <button
      onClick={login}
      style={{
        display: button ? "block" : "none",
        letterSpacing: 2,
        fontSize: 16,
      }}
    >
      login with spotify to view yours
    </button>
  );
}

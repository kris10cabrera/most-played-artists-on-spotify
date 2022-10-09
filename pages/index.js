import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";
import Box from "../components/base/Box";

import Button from "../components/Button";
import Heart from "../components/Heart";
import Scrollbar from "../components/Doodles";
import fetcher from "../lib/fetcher";

export default function Home() {
  const [user, fetchUser] = useState(null);

  const { data } = useSWR("/api/recentlyPlayed", fetcher);
  if (!data) {
    return null;
  }
  const artists = user ? user : data.artists;
  console.log(artists);

  return (
    <div>
      <Head>
        <title>favorite artists</title>
        <meta
          name="description"
          content="favorite artists on Spotify from the last 6 months. created by kris10cabrera"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        as="main"
        css={{
          backgroundColor: "#efefef",
          padding: 20,
          color: "#000",
        }}
      >
        <Scrollbar />
        <Box as="section" css={{ maxWidth: 1400, margin: "auto" }}>
          <h1
            style={{
              fontFamily: "Times",
              letterSpacing: -3,
              zIndex: 5,
              position: "sticky",
              left: 5,
              top: 15,
              right: 5,
              fontSize: 73,
              color: "#7fc0ff",
              mixBlendMode: "color-dodge",
              border: "1px solid red",
              background: "#ffffffcc",
              padding: 20,
              borderRadius: 11,
              backdropFilter: "blur(3px)",
              margin: "auto",
              marginBottom: 40,
            }}
          >
            this is what i’ve been listening to on spotify for the past 6 months{" "}
            {` `}
          </h1>

          <Button fetchUser={fetchUser} />
          <button>X</button>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {artists.map((artist) => {
              return <Heart artist={artist} key={artist.image} />;
            })}
          </div>
        </Box>
      </Box>
    </div>
  );
}

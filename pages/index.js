import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";
import Box from "../components/base/Box";

import Button from "../components/Button";
import Heart from "../components/Heart";
import Scrollbar from "../components/Doodles";
import fetcher from "../lib/fetcher";
import Heading from "../components/Heading";

export default function Home() {
  const [user, fetchUser] = useState(null);

  const { data } = useSWR("/api/recentlyPlayed", fetcher);
  if (!data) {
    return null;
  }
  const artists = user ? user : data.artists;

  return (
    <div>
      <Head>
        <title>spotify crushes</title>
        <meta
          name="description"
          content="favorite artists on spotify from the last 6 months. created by kris10cabrera"
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
          <Heading />
          <Button fetchUser={fetchUser} />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {artists.map((artist, index) => {
              return <Heart artist={artist} key={artist.image} index={index} />;
            })}
          </div>
        </Box>
        encuentra fuerza en el sonido
      </Box>
    </div>
  );
}

import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";
import Box from "../components/Box";

import Button from "../components/Button";
import Heart from "../components/Heart";
import Scrollbar from "../components/Doodles";
import fetcher from "../lib/fetcher";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

export default function Home() {
  const [user, fetchUser] = useState(null);

  const { data } = useSWR("/api/recentlyPlayed", fetcher);
  if (!data) {
    return null;
  }

  const { artists, genres } = user ? user : data;

  return (
    <div>
      <Head>
        <title>spotify crushes</title>
        <meta
          name="description"
          content="most listened to artists & genres on spotify from the last 6 months. made by kris10cabrera."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        as="main"
        css={{
          backgroundColor: "#efefef",
          padding: 20,
          color: "#000",
          paddingBottom: 100,
        }}
      >
        <Scrollbar />
        <Box as="section" css={{ maxWidth: 1400, margin: "auto" }}>
          <Heading />
          <Button fetchUser={fetchUser} />
          <Box
            css={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {artists.map((artist, index) => {
              return <Heart artist={artist} key={artist.image} index={index} />;
            })}
          </Box>
          <Box
            css={{
              fontFamily: "FT88",
              marginTop: 40,
              textAlign: "right",

              position: "relative",
              fontSize: 14,
            }}
          >
            Fonts courtesy of Velvetyne Type Foundry & Full Auto Foundry
          </Box>
        </Box>
        <Footer genres={genres} />
      </Box>
    </div>
  );
}

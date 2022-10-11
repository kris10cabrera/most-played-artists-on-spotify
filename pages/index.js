import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";
import Box from "../components/base/Box";
import Marquee from "react-fast-marquee";

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
          content="favorite artists on spotify from the last 6 months. made by kris10cabrera"
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
              gap: 20,
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {artists.map((artist, index) => {
              return <Heart artist={artist} key={artist.image} index={index} />;
            })}
          </Box>
          <SecondaryHeading />
          <Marquee
            style={{
              background: "rgb(205, 205, 205)",
              border: "1px outset #ccc",
            }}
            speed={30}
            gradient={false}
          >
            {genres.map((genre, index) => (
              <Box
                as="span"
                key={genre}
                css={{
                  fontFamily: "FT88",
                  fontStyle: "italic",
                  marginRight: 3,
                }}
              >
                {genre}
                {genres.length - 1 !== index && ","}
              </Box>
            ))}
          </Marquee>
        </Box>
        <Footer />
      </Box>
    </div>
  );
}

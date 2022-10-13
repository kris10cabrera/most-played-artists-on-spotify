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
import Marquee from "react-fast-marquee";

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
          minHeight: "100vh",
        }}
      >
        <Scrollbar />
        <Box
          as="section"
          css={{
            maxWidth: 1400,
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            "@bp0": {
              gap: 40,
            },
          }}
        >
          <Heading />
          <Button fetchUser={fetchUser} />
          <Box
            css={{
              border: "1px solid #9e9696",
              borderRadius: 30,
              background: "#ff00ad75",
              overflow: "hidden",
              boxShadow: "-4px 9px 6px 0px #9c9494",
            }}
          >
            <Marquee
              direction="right"
              pauseOnHover
              speed={7}
              gradient={false}
              style={{
                paddingTop: 40,
                paddingBottom: 40,
                overflow: "unset",
                background:
                  "linear-gradient(360deg, black, transparent), linear-gradient(360deg, black, transparent)",
              }}
            >
              {artists
                ? artists.map((artist, index) => {
                    return (
                      <Heart artist={artist} key={artist.image} index={index} />
                    );
                  })
                : array.map((artist, index) => {
                    return (
                      <Heart artist={artist} key={artist.image} index={index} />
                    );
                  })}
            </Marquee>
          </Box>
          <Box
            css={{
              fontFamily: "FT88",
              marginTop: 40,
              textAlign: "right",
              position: "relative",
              marginTop: 80,
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

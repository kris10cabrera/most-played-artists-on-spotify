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
  const [list, viewlist] = useState(false);

  const { data } = useSWR("/api/recentlyPlayed", fetcher);
  if (!data) {
    return null;
  }

  const { artists, genres } = user ? user : data;
  const arr = Array(20).fill(0);

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
      <Scrollbar />
      <Box
        as="main"
        css={{
          backgroundColor: "#efefef",
          padding: 20,
          color: "#000",
          minHeight: "100vh",
        }}
      >
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
          <Box>
            <Box
              css={{
                border: "1px solid #9e9696",
                borderRadius: 30,
                background: "#ff00ad75",
                overflow: "hidden",
                boxShadow: "-4px 9px 6px 0px #9c9494",
              }}
            >
              {!list ? (
                <Marquee
                  direction="right"
                  pauseOnHover
                  speed={13}
                  gradient={false}
                  style={{
                    paddingTop: 40,
                    paddingBottom: 40,
                    overflow: "unset",
                    background:
                      "linear-gradient(360deg, #b8b8b8, transparent), linear-gradient(360deg, white, transparent)",
                  }}
                >
                  {artists
                    ? artists.map((artist, index) => {
                        return (
                          <Heart
                            artist={artist}
                            key={artist.image}
                            index={index}
                          />
                        );
                      })
                    : arr.map((artist, index) => {
                        return (
                          <Heart
                            artist={artist}
                            key={artist.image}
                            index={index}
                          />
                        );
                      })}
                </Marquee>
              ) : (
                <Box
                  css={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    paddingTop: 20,
                    paddingBottom: 20,
                    overflow: "unset",
                    background:
                      "linear-gradient(360deg, #b8b8b8, transparent), linear-gradient(360deg, white, transparent)",
                  }}
                >
                  {artists
                    ? artists.map((artist, index) => {
                        return (
                          <Heart
                            artist={artist}
                            key={artist.image}
                            index={index}
                          />
                        );
                      })
                    : arr.map((artist, index) => {
                        return (
                          <Heart
                            artist={artist}
                            key={artist.image}
                            index={index}
                          />
                        );
                      })}
                </Box>
              )}
            </Box>
            <Box
              as="button"
              onClick={() => viewlist(!list)}
              css={{
                marginTop: 12,
                cursor: "pointer",
                padding: 2,
                zIndex: 9,
                alignSelf: "flex-start",
                fontFamily: "FT88",
                position: "relative",
                textShadow: "0px 0px 17px #0031ff",
                fontSize: 16,
                backgroundColor: "#cdcdcd",
                color: "#000000",
                border: "2px outset",
                borderRightColor: "#c4c4c4",
                borderTopColor: "#c4c4c4",
                borderBottomColor: "#ccc",
                borderLeftColor: "#fff",
                transition: "transform 200ms, background-color 200ms",
                "&:active": {
                  transform: "translateY(2px)",
                  backgroundColor: "#a7a7a7",
                },
              }}
            >
              {list ? "view within container" : "view as list"}
            </Box>
          </Box>
          <Footer genres={genres ? genres : arr} />
          <Box
            css={{
              fontFamily: "FT88",
              textAlign: "right",
              position: "relative",
              fontSize: 12,
              marginTop: 80,
            }}
          >
            Fonts courtesy of Velvetyne Type Foundry & Full Auto Foundry
          </Box>
        </Box>
      </Box>
    </div>
  );
}

import Head from "next/head";
import { useState } from "react";

import Box from "../components/Box";
import Button from "../components/Button";
import Heart from "../components/Heart";
import Doodles from "../components/Doodles";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import useUser from "../hooks/use-user";

export default function Home() {
  const [user, fetchUser] = useState(null);
  const [list, viewlist] = useState(false);
  const { data, isLoading } = useUser();
  const artists = user ? user.artists : data?.artists;
  const genres = user ? user.genres : data?.genres;
  const arr = Array(20).fill(0);

  return (
    <>
      <Doodles />
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
            <Box
              css={{
                display: "flex",
                justifyContent: "space-between",
                "@bp0-max": {
                  flexDirection: "column",
                  gap: 6,
                },
              }}
            >
              <Button fetchUser={fetchUser} />
              <Box
                as="button"
                onClick={() => viewlist(!list)}
                css={{
                  cursor: "pointer",
                  padding: 2,
                  zIndex: 9,
                  alignSelf: "flex-start",
                  fontFamily: "FT88",
                  position: "relative",
                  fontSize: 14,
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
                  "@bp0-max": {
                    alignSelf: "flex-end",
                  },
                }}
              >
                {list ? "horizontal list view" : "vertical list view"}
              </Box>
            </Box>
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
                  <Box
                    css={{
                      display: "flex",
                      paddingY: 20,
                      overflow: "scroll",
                      background:
                        "linear-gradient(360deg, #b8b8b8, transparent), linear-gradient(360deg, white, transparent)",
                      "@bp0": {
                        paddingTop: 40,
                        paddingBottom: 40,
                      },
                    }}
                  >
                    {isLoading
                      ? arr.map((_, index) => {
                          return (
                            <Heart artist={index} key={index} index={index} />
                          );
                        })
                      : artists.map((artist, index) => {
                          return (
                            <Heart
                              artist={artist}
                              key={artist.image}
                              index={index}
                            />
                          );
                        })}
                  </Box>
                ) : (
                  <Box
                    css={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      flexWrap: "wrap",
                      paddingTop: 20,
                      paddingBottom: 20,
                      overflow: "unset",
                      background:
                        "linear-gradient(360deg, #b8b8b8, transparent), linear-gradient(360deg, white, transparent)",
                      overflow: "scroll",
                      maxHeight: 400,

                      "@bp0": {
                        maxHeight: 500,
                      },
                    }}
                  >
                    {isLoading
                      ? arr.map((_, index) => {
                          return (
                            <Heart artist={index} key={index} index={index} />
                          );
                        })
                      : artists.map((artist, index) => {
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
            </Box>
            <Footer genres={genres} isLoading={isLoading} arr={arr} />
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
    </>
  );
}

import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";
import Button from "../Button";
import fetcher from "../lib/fetcher";

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
        <title>favorite artists</title>
        <meta
          name="description"
          content="favorite artists on Spotify from the last 6 months. created by kris10cabrera"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          backgroundColor: "#efefef",
          padding: 20,
        }}
      >
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
            return (
              <div
                key={artist.artist}
                className="artist-wrapper"
                style={{
                  width: 300,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <a
                  href={artist.url}
                  className="artist-name"
                  style={{
                    fontSize: 28,
                    lineHeight: 1.2,
                    fontFamily: "FT88 Gothique",
                  }}
                >
                  {artist.artist}
                </a>

                <div
                  className="glitter-heart"
                  style={{
                    width: 260,
                    height: 260,
                    backgroundSize: "100%",
                    backgroundImage: "url(/grain-heart.png)",
                    backgroundRepeat: "no-repeat",
                    transition: "filter 300ms, color 300ms",
                    filter: "drop-shadow(gray 0px 0px 4px)",
                  }}
                >
                  <div
                    className="artist-image"
                    style={{
                      backgroundImage: `url(${artist.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: 240,
                      height: 220,
                      maskImage: `url(/heart.png)`,
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                      maskSize: "contain",
                      WebkitMaskImage: `url(/heart.png)`,
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      WebkitMaskSize: "contain",
                      margin: "auto",
                    }}
                  />
                </div>
              </div>
            );
          })}
          <div
            className="text-wrapper"
            style={{
              fontFamily: "Times",
              position: "fixed",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: 60,
              width: "90%",
              color: "red",
              letterSpacing: -3,
              maxWidth: 620,
              border: "1px solid red",
              background: "#ffffffcc",
              padding: 20,
              borderRadius: 11,
              backdropFilter: "blur(3px)",
            }}
          >
            <h1 style={{ display: "inline" }}>
              this is what i’ve been listening to on spotify for the past 6
              months {` `}
            </h1>
            <span
              style={{
                fontFamily: "FA_KJNZEIIUUL",
                overflowWrap: "break-word",
              }}
            >
              onmed
            </span>
            <Button fetchUser={fetchUser} />
            <button>X</button>
          </div>
        </div>
      </main>
    </div>
  );
}

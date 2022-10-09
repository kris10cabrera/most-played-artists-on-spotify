import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";
import Button from "../Button";
import Heart from "../components/Heart";
import Scrollbar from "../components/Scrollbar";
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

      <main
        style={{
          backgroundColor: "#efefef",
          padding: 20,
          color: "#000",
        }}
      >
        <Scrollbar />
        <div
          className="text-wrapper"
          style={{
            fontFamily: "Times",
            // position: "fixed",
            // left: "50%",
            // top: "50%",
            // transform: "translate(-50%, -50%)",
            fontSize: 100,
            width: "90%",
            color: "red",
            letterSpacing: -3,
            maxWidth: 900,
            border: "1px solid red",
            background: "#ffffffcc",
            padding: 20,
            borderRadius: 11,
            backdropFilter: "blur(3px)",
            margin: "auto",
            marginBottom: 40,
          }}
        >
          <h1 style={{ display: "inline" }}>
            this is what i’ve been listening to on spotify for the past 6 months{" "}
            {` `}
          </h1>

          <Button fetchUser={fetchUser} />
          <button>X</button>
        </div>
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
      </main>
    </div>
  );
}

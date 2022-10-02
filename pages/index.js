import Head from "next/head";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function Home() {
  const { data } = useSWR("/api/recentlyPlayed", fetcher);
  if (!data) {
    return null;
  }
  const { artists, genres } = data;

  return (
    <div>
      <Head>
        <title>favorite artists & genres</title>
        <meta
          name="description"
          content="favorite artists & genres on Spotify from the last 6 months. created by kris10cabrera"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>favorite artists & genres</h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {artists.map((artist) => (
            <div key={artist.artist}>
              <h2 style={{ fontStyle: "italic", fontSize: 20 }}>
                {artist.artist}
              </h2>
              <img src={artist.image} style={{ width: 150 }} />
            </div>
          ))}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {genres.map((genre) => (
              <div key={genre}>{genre}</div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

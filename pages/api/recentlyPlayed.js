import { getRecentlyPlayed } from "../../lib/spotify";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_, res) => {
  const response = await getRecentlyPlayed();
  const { items } = await response.json();

  const artists = items.map((item) => ({
    artist: item.name,
    image: item.images[1].url,
    url: item.external_urls["spotify"],
  }));

  return res.status(200).json({ artists });
};

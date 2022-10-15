import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function useUser() {
  const { data, error } = useSWR(`/api/recentlyPlayed`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

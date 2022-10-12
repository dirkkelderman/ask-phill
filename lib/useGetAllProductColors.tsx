import useSWR from "swr";

export default function useGetAllProductColors() {
  const fetcher = async () => {
    const response = await fetch("/api/colors");
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR(["/api/colors"], fetcher);

  return {
    allColors: data,
    isLoading: !error && !data,
    isError: error,
  };
}

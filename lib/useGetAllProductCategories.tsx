import useSWR from "swr";

export default function useGetAllProductCategories() {
  const fetcher = async () => {
    const response = await fetch("/api/categories");
    const data = await response.json();
    return data;
  };

  const { data, error } = useSWR(["/api/categories"], fetcher);

  return {
    allCategories: data,
    isLoading: !error && !data,
    isError: error,
  };
}

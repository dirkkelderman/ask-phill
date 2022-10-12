import useSWR from "swr";

export function useGetPage(page: string, limit: string, offset: string) {

  console.log("data Fetched");
  
  const fetcher = async () => {
    const response = await fetch(
      `/api/products?page=${page}&limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    return data;
  };

  const url = `/api/products?page=${page}&limit=${limit}&offset=${offset}`;

  const { data, error } = useSWR([`${url}`], fetcher);

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}

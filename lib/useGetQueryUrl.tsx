import { useRouter } from "next/router";

interface QueryProps {
  limit: number;
  offset: number;
  page: number;
  colors: string[];
  categories: string[];
  price: number[];

}

export default function useGetQueryUrl(): QueryProps {
  const { query } = useRouter();
  const page = Number(query.page) >= 1 ? Number(query.page) : 1;
  const limit = Number(query.limit) >= 10 ? Number(query.limit) : 10;
  const offset = 20 | ((page - 1) * limit);

  const colors = query.color?.split(",") || [];
  const categories = query.category?.split(",") || [];
  const price = query.price?.split("-").map(Number) || [];

  return {
    page,
    limit,
    offset,
    colors,
    categories,
    price,
  };
}

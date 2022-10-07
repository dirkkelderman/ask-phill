import { useState } from "react";
import useSWR from "swr";
import { ProductProps } from "../interfaces/product";
import ProductCard from "./ProductCard";

const fetcher = async () => {
  const response = await fetch("/api/products");
  const data = await response.json();
  return data;
};

const Page = ({ page, limit, search }) => {
  const { data, error } = useSWR(
    `/api/products?page=${page}&_limit=${limit}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.slice(0, limit).map((product: ProductProps, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Page;

import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { PageProps } from "../interfaces/page";
import Filters from "../layouts/Filters";
import useGetQueryUrl from "../lib/useGetQueryUrl";
import ProductCard from "./ProductCard";

const Page = ({ page, limit, offset }: PageProps) => {
  const { colors, categories, price } = useGetQueryUrl();

  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetcher = async () => {
    const response = await fetch(
      `/api/products?page=${page}&limit=${limit}&offset=${offset}`
    );
    const data = await response.json();
    return data;
  };

  const url = `/api/products?page=${page}&limit=${limit}&offset=${offset}`;

  const { data, error } = useSWR([`${url}`], fetcher);

  const filterProducts = data?.data?.filter((product: any) => {
    return product?.colorFamily === null || product?.categoryTags === null || product?.colorFamily[0].name.includes(colors) && product?.categoryTags[0]?.includes(categories) && parseInt(product.price) <= price
  });

  useEffect(() => {
    setFilteredProducts(filterProducts);
  }, [filterProducts?.length]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="container w-screen">
      <Filters />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts?.length > 0 ? (
          filteredProducts?.map(
            (
              {
                name,
                categoryTags,
                colorFamily,
                node_locale,
                price,
                thumbnailImage,
              },
              index: number
            ) => (
              <ProductCard
                key={index}
                name={name}
                categoryTags={categoryTags}
                colorFamily={colorFamily}
                node_locale={node_locale}
                price={price}
                thumbnailImage={thumbnailImage}
              />
            )
          )
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Page);

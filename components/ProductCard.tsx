/* eslint-disable @next/next/no-img-element */
import { ProductCardProps } from "../interfaces/product-card";
import React from "react";

const ProductCard = ({
  name,
  categoryTags,
  colorFamily,
  node_locale,
  price,
  thumbnailImage,
}: ProductCardProps) => {
  return (
    <div className=" bg-slate-300 rounded-2xl w-96 shadow-xl">
      <div className="flex flex-col font-sans  ">
        <div className="w-full relative">
          <img
            src={thumbnailImage}
            alt=""
            className=" w-full h-full rounded-2xl "
            loading="lazy"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-slate-900">
              {name}
            </h1>
            <div className="text-lg font-semibold text-slate-500">{price}</div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm">
              {categoryTags?.map((tag, index) => (
                <label key={index}>
                  <input className="sr-only peer" name={tag} />
                  <div className="px-2 h-9 rounded-lg flex items-center justify-center font-semibold bg-slate-900 text-white">
                    {tag}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="flex items-baseline mt-2 mb-6 pb-6 border-b border-slate-200">
            <div className="space-x-2 flex text-sm">
              {colorFamily?.map((color, index) => (
                <label key={index}>
                  <input className="sr-only peer" name={color.name} />
                  <div className="px-2 h-6 rounded-lg flex items-center justify-center bg-slate-900 text-white">
                    {color.name}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4 ">
              <button
                className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                type="button"
              >
                Add to bag
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);

import { NextApiRequest, NextApiResponse } from "next";
import * as data from "../../data/miista-export.json";
import { ProductCardProps, Test } from "../../interfaces/product-card";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page, limit, offset } = req.query;

  // console.log("offset", req.query.offset);

  const pageNumber = page || 1;
  const limitNumber = parseInt(limit) || 10;
  const offSetNumber = parseInt(offset) || 0;

  const totalPages = Math.ceil(
    data.data.allContentfulProductPage.edges.length / limitNumber
  );

  const totalProducts = data.data.allContentfulProductPage.edges.length;

  // const offset = (pageNumber - 1) * limitNumber;

  const allData = data.data.allContentfulProductPage.edges.map((item: any) => {
    return {
      name: item.node.name,
      categoryTags: item.node.categoryTags,
      colorFamily: item.node.colorFamily,
      node_locale: item.node.node_locale,
      price: item.node.shopifyProductEu.variants.edges[0].node.price,
      thumbnailImage: item.node.thumbnailImage.file.url,
    };
  });

  // console.log("allData", allData);

  const productData = data.data.allContentfulProductPage.edges.slice(
    offSetNumber,
    offSetNumber + limitNumber
  ) as Test[];

  const selectedData = allData.slice(offSetNumber, offSetNumber + limitNumber);

  //{data: {productData, totalCount}, error: null}

  // console.log(
  //   "offset",
  //   offset,
  //   "page",
  //   pageNumber,
  //   "limit",
  //   limitNumber,
  //   "total",
  //   totalPages
  // );


  return res
    .status(200)
    .json({ data: selectedData, totalPages: totalPages, error: null });
}

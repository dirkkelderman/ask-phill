import { NextApiRequest, NextApiResponse } from "next";
import * as data from "../../data/miista-export.json";
import { ProductCardProps } from "../../interfaces/product-card";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page, limit, offset } = req.query;
  const limitNumber = parseInt(limit as string) || 10;
  const offSetNumber = parseInt(offset as string) || 0;

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

  const selectedData = allData.slice(
    offSetNumber,
    offSetNumber + limitNumber
  ) as ProductCardProps[];

  return res.status(200).json({ data: selectedData, error: null });
}

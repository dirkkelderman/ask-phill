import { NextApiRequest, NextApiResponse } from "next";
import * as data from "../../data/miista-export.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const allCategoryData = data.data.allContentfulProductPage.edges
    .map((product: any) => product.node.categoryTags)
    .flat()
    .filter(
      (catergory: string, index: any, array: any[]) =>
        array.indexOf(catergory) === index
    );

  return res.status(200).json({ data: allCategoryData, error: null });
}

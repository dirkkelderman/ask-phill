import { NextApiRequest, NextApiResponse } from "next";
import * as data from "../../data/miista-export.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const allColorData = data.data.allContentfulProductPage.edges
    ?.map((product: { colorFamily: any }) => product.node.colorFamily)
    .flat()
    .filter(
      (color: { name: any }, index: any, array: any[]) =>
        array.findIndex(
          (selectedColor: { name: any }) => selectedColor?.name === color?.name
        ) === index
    );

  return res.status(200).json({ data: allColorData, error: null });
}

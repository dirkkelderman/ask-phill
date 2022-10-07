import { NextApiRequest, NextApiResponse } from "next";
import * as data from "../../data/miista-export.json"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  return res.status(200).json(data.data.allContentfulProductPage.edges);
}

import { NextApiRequest, NextApiResponse } from 'next';
import { getAllProducts, Product } from 'lib/db';

export interface ProductsQuery {}
export interface ProductsRes {
  products?: Product[];
  error?: string | any;
}

export default async (_: NextApiRequest, res: NextApiResponse<ProductsRes>) => {
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

  try {
    const products = await getAllProducts();

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error });
  }
};

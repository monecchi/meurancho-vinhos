import { NextApiRequest, NextApiResponse } from 'next';
import { getProduct, GetProductProps, Product } from 'lib/db';

export interface ProductQuery extends GetProductProps {}
export interface ProductRes {
  product?: Product;
  error?: string | any;
}

export default async (req: NextApiRequest, res: NextApiResponse<ProductRes>) => {
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

  try {
    const { id } = (req.query as any) as ProductQuery;

    const product = await getProduct({ id });

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ error });
  }
};

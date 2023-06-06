import { products as dbProducts, Product as DBProduct } from 'data/wines-data';

export interface Product extends DBProduct { }

export interface GetProductProps {
	// id: string;
	id: Product['id'] | Product['slug'];
  // slug: Product['slug'];
}

export const getProduct = async ({ id }: GetProductProps): Promise<Product | any> => {
  const product = dbProducts.find((product) => product.id === id || product.slug === id);
  return product;
};

export const getAllProducts = async (): Promise<Product[]> => {
  return dbProducts;
};

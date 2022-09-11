import useSWR, { SWRConfiguration } from 'swr';
import { ProductsQuery, ProductsRes } from 'pages/api/products';
import { fetcher, axiosFetcher } from 'utils/fetcher';

export interface UseAllProductsProps
	extends SWRConfiguration,
	Partial<ProductsQuery> { }

export const useAllProducts = (config?: UseAllProductsProps) => {
	const swr = useSWR<ProductsRes>('/api/products/', fetcher, config);

	const isLoading = !swr.error && !swr.data;

	return {
		...swr,
		isLoading,
	};
};

export const useProducts = () => {
	const swr = useSWR(`/api/products`, axiosFetcher)

	const isLoading = !swr.error && !swr.data;

	return {
		...swr,
		isLoading,
	};
}

import useSWR from 'swr';

// import productFetcher from 'utils/api/product';
const productFetcher = (url: string) => fetch(url).then((res) => res.json());

interface Props {
  slug: string;
}

export default function useProduct({ slug }: Props) {
  const { data, mutate, error } = useSWR('/api/products.json', productFetcher);

  const loading = !data && !error;
  // need to remove when you using real API integration
  let product = data?.filter((current: { slug: string; }) => current.slug === slug);

  return {
    loading,
    error,
    data: product,
    // user: data,
    mutate,
  };
}

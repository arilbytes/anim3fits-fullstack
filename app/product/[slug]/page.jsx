import { notFound } from 'next/navigation';
import {
  getProductBySlug,
  getRelatedProducts,
  PRODUCTS,
} from '@/app/data/products';
import ProductDetail from './ProductDetail';

export function generateStaticParams() {
  return PRODUCTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.image ? [{ url: product.image }] : [],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <ProductDetail
      key={product.id}
      product={product}
      related={getRelatedProducts(product)}
    />
  );
}
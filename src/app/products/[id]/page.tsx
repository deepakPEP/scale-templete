import { Metadata } from "next";
import ProductDetails from "@/components/productDetails";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    group?: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Product ${id} - Products`,
    description: "Product details page",
  };
}

export default async function ProductDetailPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const { group = "" } = await searchParams;
  const productId = parseInt(id, 10);

  return <ProductDetails productId={productId} group={group} />;
}


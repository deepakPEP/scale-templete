import { SubBanner, ProductList } from "@/components";

export default function Products() {

  return (
    <div className="min-h-screen">
      <SubBanner title="Products" description="Home / Products" />

      <ProductList hideHeader={true} />

    </div>
  );
}

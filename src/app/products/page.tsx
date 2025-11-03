import { Company, ProductListing, SubBanner, SupplierForm } from "@/components";

export default function Products() {

  return (
    <div className="min-h-screen">
      <SubBanner title="Products" description="Describe the Important features, pricing and other relevant info" />

      <Company />

      <ProductListing />

      <SupplierForm />
    </div>
  );
}

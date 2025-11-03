import HeroBanner from "@/components/heroBanner";
import { Clientele, Company, Overview, ProductList, SupplierForm, Whyus } from "@/components";
import Infrastructure from "@/components/Infrastructure";

export default function Home() {

  return (
    <div className="min-h-screen">
      <HeroBanner />

      <Company />

      <Overview />

      <ProductList />

      <Whyus />

      <Infrastructure />
      
      <Clientele />

      <SupplierForm />
    </div>
  );
}

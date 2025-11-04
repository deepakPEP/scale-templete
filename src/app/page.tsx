import HeroBanner from "@/components/heroBanner";
import { Clientele, Overview, ProductList, SupplierForm, Whyus } from "@/components";
import Infrastructure from "@/components/Infrastructure";

export default function Home() {

  return (
    <div className="min-h-screen">
      <HeroBanner />

      <Overview />

      <ProductList maxItems={6} />

      <Whyus />

      <Infrastructure />
      
      <Clientele />

      <SupplierForm />
    </div>
  );
}

import HeroBanner from "@/components/heroBanner";
import { Clientele, Imagecontent, IndustryWeServe, Overview, ProductList, SupplierForm, Testimonial, Whyus } from "@/components";
import Infrastructure from "@/components/Infrastructure";

export default function Home() {

  return (
    <div className="min-h-screen">
      <HeroBanner />

      <Overview />

      <ProductList maxItems={6} />

      <Whyus />

      <IndustryWeServe />

      <Infrastructure />

      <Imagecontent />

      <Testimonial/>
      
      <Clientele />
    </div>
  );
}

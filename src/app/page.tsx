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

      <Imagecontent heading="R&D" description="Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it." />

      <Testimonial/>
      
      <Clientele />
    </div>
  );
}

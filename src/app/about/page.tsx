import {
  Accordion,
  Certifications,
  Clientele,
  CompanyDetails,
  Imagecontent,
  Overview,
  SubBanner,
  SupplierForm,
  Testimonial,
  VisionMission,
  Whyus,
} from "@/components";

export default function About() {

  return (
    <div className="min-h-screen">
      <SubBanner
        title="About Us"
        description="Describe the Important features, pricing and other relevant info"
      />

      <Overview />

      <CompanyDetails />

      <VisionMission />

      <Whyus />

      <Imagecontent />

      <Certifications />

      <Accordion />

      <Testimonial/>

      <Clientele />

      <SupplierForm />
    </div>
  );
}

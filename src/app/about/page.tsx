import {
  Accordion,
  Certifications,
  Clientele,
  Company,
  CompanyDetails,
  Imagecontent,
  Overview,
  SubBanner,
  SupplierForm,
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

      <Company />

      <Overview />

      <CompanyDetails />

      <VisionMission />

      <Whyus />

      <Imagecontent />

      <Certifications />

      <Accordion />

      <Clientele />

      <SupplierForm />
    </div>
  );
}

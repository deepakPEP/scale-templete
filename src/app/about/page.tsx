import {
  Accordion,
  Certifications,
  Clientele,
  CompanyDetails,
  Imagecontent,
  IndustryWeServe,
  Infrastructure,
  Overview,
  SubBanner,
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

      <Whyus />

      <VisionMission />

      <Imagecontent />

      <IndustryWeServe />

      <Infrastructure />

      <Imagecontent />

      <Certifications />

      <Accordion />

      <Testimonial/>

      <Clientele />

    </div>
  );
}

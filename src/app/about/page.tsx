import {
  Accordion,
  AboutSubNav,
  Certifications,
  Clientele,
  CompanyDetails,
  Imagecontent,
  IndustryWeServe,
  Infrastructure,
  Overview,
  SubBanner,
  Teammates,
  Testimonial,
  VisionMission,
  Whyus,
} from "@/components";

export default function About() {

  return (
    <div className="min-h-screen">
      <SubBanner
        title="About Us"
        description="Home / About Us"
      />

      <AboutSubNav />

      <div id="overview">
        <Overview topClassName="overview-section__top--about" />
      </div>

      <div id="why-us">
          <Whyus />
      </div>

      <div id="vision-mission">
        <VisionMission />
      </div>

      <div id="quality-assurance">
        <Imagecontent heading="Quality Assurance" description="Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it."/>
      </div>

      <div id="industry-we-serve">
        <IndustryWeServe />
      </div>

      <div id="infrastructure">
        <Infrastructure />
      </div>

      <div id="r-d">
        <Imagecontent heading="R&D" description="Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it."/>
      </div>

      <div id="team">
        <Teammates/>
      </div>

      <div id="certifications">
        <Certifications />
      </div>

      <div id="faq">
        <Accordion />
      </div>

      <div id="testimonials">
        <Testimonial/>
      </div>

      <div id="clientele">
        <Clientele />
      </div>

    </div>
  );
}

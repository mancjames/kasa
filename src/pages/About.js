import React from "react";
import Accordion from "../components/Accordion";
import AboutHero from "../components/components__about/AboutHero";
import "../styles/About.css";

export default function About() {
  const accordionData = [
    {
      id: 1,
      title: "Reliability",
      content: `The ads posted on Kasa guarantee total reliability of the place. The photos are consistent with the accommodations, and all information is regularly checked by our teams.`,
    },
    {
      id: 2,
      title: "Respect",
      content:
        "Caring is one of the founding values of Kasa. Any discriminatory behavior or disruptive behavior in the neighborhood will result in exclusion from our platform.",
    },
    {
      id: 3,
      title: "Service",
      content:
        "Our teams are at your disposal to provide you with the best experience. Please do not hesitate to contact us if you have any questions.",
    },
    {
      id: 4,
      title: "Safety",
      content:
        "Safety is Kasa's priority. Both for our guests and for travelers, each accommodation is compliant with the safety criteria established by our services. By leaving a note for both the host and the tenant, our teams can verify that the standards are respected. We also organize workshops on home security for our guests.",
    },
  ];

  const accordion = accordionData.map((item) => {
    return (
      <Accordion key={item.id} title={item.title} content={item.content} />
    );
  });

  return (
    <div className="about">
      <AboutHero />
      <section className="about__accordion-section">{accordion}</section>
    </div>
  );
}

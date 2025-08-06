"use client";

import AboutSection from "./components/AboutSection";
import KoneSection from "./components/KoneSection";
import HeroSection from "./components/HeroSection";
import NewsSection from "./components/NewsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection
        heading="At Kiorons, we build AI to serve humanity’s long-term well-being."
        btnText="View Manifesto"
        summary={`
    ehehehe cbdshbvcdbvhbdsv csdhgvcgudvcudcvuhbd
    cnjhdbcvhjduhnuhuvheiuhvufehvnuhfnuvhfuvhufhvnufhnvufhnvuhfu
    <br />
    ehehehe cbdshbvcdbvhbdsv csdhgvcgudvcudcvuhbd
    njhdbcvhjduhnuhuvheiuhvufehvnuhfnuvhfuvhufhvnufhnvufhnvuhfuvhfuvhufhvuhf
    vuhfuvhiufhb viufh bu buh fdubh uibhvhfuvhufhvuhf vuhfuvhiufhb viufh
    bu buh fdubh uibh
    <br /><br />
    ehehehe cbdshbvcdbvhbdsv csdhgvcgudvcudcvuhbd
    njhdbcvhjduhnuhuvheiuhvufehvnuhfnuvhfuvhufhvnufhnvufhnvuhfuvhfuvhufhvuhf
    vuhfuvhiufhb viufh bu buh fdubh uibhvhfuvhufhvuhf vuhfuvhiufhb viufh
    bu buh fdubh uibh
  `}
      />
      <KoneSection />
      <NewsSection />
    </>
  );
}

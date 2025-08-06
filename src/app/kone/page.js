"use client";

import AboutSection from "../components/AboutSection";

export default function Kone() {
  return (
    <>
      <section
        className="font-gellix mx-auto text-center w-full h-screen flex justify-center items-center xl:px-12 xl:max-w-8xl"
        style={{
          backgroundImage: "url('/images/svg/koneHero.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "fill",
          backgroundPosition: "center",
        }}
      ></section>
      <AboutSection
        heading="We believe on creating future more simplified and powerful"
        btnText="Read Manifesto"
        summary={`
         kOne is a new standard of AI creation where nobody have to use multiple tools to do unmanaged work.
         <br /><br />
         with kOne we believe building brands, Saas, and managing is simplified. for the first time we’ll not going to create pretty screens but the real systems.`}
      />
      <div className="font-gellix space-y-0 text-7xl mx-auto text-center font-semibold leading-tighter">
        {["Think Brand", "Think Product", "Think One"].map((text, i) => (
          <h1 key={i}>{text}</h1>
        ))}
      </div>
    </>
  );
}

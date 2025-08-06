"use client";
import AboutSection from "../components/AboutSection";
import BlogCarousel from "../components/BlogCarousel";
import VisionBlock from "../components/VisionBlock";
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
      <div className="font-gellix space-y-0 text-9xl mx-auto text-center font-semibold leading-tighter">
        {["Think Brand", "Think Product", "Think One"].map((text, i) => (
          <h1 key={i}>{text}</h1>
        ))}
      </div>
      <section
        className="font-gellix w-full xl:px-12 xl:max-w-8xl max-w-6xl px-4 md:px-0 mx-auto h-screen flex justify-start items-center my-52"
        style={{
          backgroundImage: "url('/images/svg/sidelins.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "fill",
          backgroundPosition: "right center",
        }}
      >
        <div>
          <h1 className="text-6xl font-semibold leading-20 font-gellix">
            This is Future
          </h1>
          <h1 className="text-6xl font-semibold font-gellix">
            we are building.
          </h1>
          <p className="text-lg mt-10 max-w-md font-medium">
            {"If you're obsessed with shaping what comes next you belong here."}
          </p>
        </div>
      </section>
      {/* Vision Block */}
      <VisionBlock />
      <BlogCarousel heading="Studies" limit={3}/>
    </>
  );
}

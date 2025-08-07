"use client";

import { ArrowUpRight, ChevronDown } from "lucide-react";
import CareerSubSection from "../components/CareerSubSection";
import GlassButtonWithText from "../components/GlassButtonWithText";
import JobCard from "../components/JobCard";
import GlassButton from "../components/GlassButton";
import BlogCarousel from "../components/BlogCarousel";
export default function Career() {
  return (
    <>
      <section
        className="font-gellix mx-auto text-center w-full h-screen flex justify-center items-center xl:px-12 xl:max-w-8xl"
        style={{
          backgroundImage: "url('/images/career-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div>
          <h1 className="text-8xl font-semibold leading-20 font-gellix">
            Build the
          </h1>
          <h1 className="text-8xl font-semibold font-gellix">New System.</h1>
          <p className="text-lg mt-10 max-w-md mx-auto font-medium">
            {"If you're obsessed with shaping what comes next you belong here."}
          </p>
        </div>
      </section>
      <CareerSubSection />

      <section className="py-16 sm:py-0  font-gellix mx-auto px-4 text-center w-full xl:px-12 xl:max-w-8xl">
        <h2 className="text-4xl sm:text-6xl font-semibold mb-5 text-zinc-50 max-w-2xl mx-auto">
          Featured Roles
        </h2>
        <p className="text-lg text-primary font-normal mb-8 max-w-lg mx-auto">
          We’re looking for curious minds from a wide range of disciplines and
          backgrounds.
        </p>

        <GlassButton className="mt-2 !py-2 text-sm font-normal">
          View All Roles
        </GlassButton>

        {/* <GlassButtonWithText
          as="a"
          href="#loadmore"
          text="View All Roles"
          icon={<ArrowUpRight className="w-3 h-3" />}
          iconPosition="right"
          className="!px-3 !py-0"
        /> */}

        <div className="my-20">
          {[...Array(5)].map((_, index) => (
            <JobCard
              key={index}
              designation="Senior Software Engineer"
              area="Engineering"
              type="Remote"
              apply_link="https://www.example.com/apply"
            />
          ))}
        </div>
      </section>

      <BlogCarousel heading="Resources" limit={3}/>
    </>
  );
}

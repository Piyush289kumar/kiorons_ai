'use client' // <-- Required for Framer Motion
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LandingPageButton } from '@/components/landing/LandingPageButton'
import Footer from '../layouts/Footer'
import CTA from '@/components/landing/CTA'
export const dynamic = 'force-dynamic'
export default function JobOpeningPage() {
  const controls1 = useAnimation()
  const controls2 = useAnimation()
  const controls3 = useAnimation()
  const controls4 = useAnimation()
  const controls5 = useAnimation()
  // Intersection observers for each section
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 })
  // Trigger animations when sections come into view
  useEffect(() => {
    if (inView1) controls1.start('visible')
    if (inView2) controls2.start('visible')
    if (inView3) controls3.start('visible')
    if (inView4) controls4.start('visible')
    if (inView5) controls5.start('visible')
  }, [
    controls1,
    controls2,
    controls3,
    controls4,
    controls5,
    inView1,
    inView2,
    inView3,
    inView4,
    inView5,
  ])
  const [recentJobOpening, setRecentJobOpening] = useState([])
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/job-opening`)
      .then((res) => res.json())
      .then((data) => {
        setRecentJobOpening(data)
      })
      .catch((err) => console.error('Failed to fetch Job', err))
  }, [])
  return (
    <>
      <article className="scroll-smooth !font-gellix">
        <div className="@container w-full my-20">
          <div className="max-w-container mb-md">
            <section className="flex flex-col justify-center items-center px-4 w-full">
              <div className="!text-center !w-11/12 md:!w-6/12 !mx-auto !mt-16">
                <div className="!text-center !mb-40">
                  <h1 className="!text-6xl md:!text-5xl sm:!text-4xl !font-semibold !tracking-tight">
                    Open Positions
                  </h1>
                  <p className="!text-xl md:!text-lg sm:!text-base !font-semibold !mt-4">
                    {'We’re looking for curious minds from a wide range of disciplines'}
                  </p>
                </div>
                <div className="!w-10/12 !max-w-md !mx-auto">
                  <div className="!relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="!w-full !pl-5 !pr-10 !py-3 !rounded-4xl !bg-[#292929] !text-white !shadow-sm focus:!outline-none focus:!ring-1 focus:!ring-white !font-gellix"
                    />
                    <span className="!absolute !inset-y-0 !right-0 !pr-14 !flex !items-center !pointer-events-none">
                      <svg
                        className="!w-5 !h-5 !text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="!mt-12">
                  {recentJobOpening.map((job, index) => (
                    <div
                      key={index}
                      className="group !border-t !border-b !border-gray-600 !py-5 !px-4 !transition-all !duration-300 !ease-in-out !cursor-pointer"
                    >
                      <div className="!flex !flex-row !justify-between !items-start !transition-all !duration-300 !ease-in-out !gap-4">
                        <div className="!flex !gap-4 !flex-wrap">
                          <h3 className="!text-sm md:!text-md !font-semibold !text-white !text-start !transition-all !duration-300">
                            {job.job_title}
                          </h3>
                          <span className="!text-[#A2A2A2] !text-sm !transition-all !duration-300 hidden md:!block">
                            {job.position}
                          </span>
                        </div>
                        <div className="!flex !gap-4 !items-center !flex-wrap">
                          <span className="!text-[#A2A2A2] !text-sm !transition-all !duration-300 hidden md:!block">
                            {job.time}
                          </span>
                          <span className="!text-[#A2A2A2] !text-sm !transition-all !duration-300 hidden md:!block">
                            {job.job_type}
                          </span>
                          <Link
                            href={`/job-opening/apply-job/${job.id}`}
                            className="!text-sm !border !border-white !transition-all !duration-300 !p-2 !px-6 !rounded-3xl !whitespace-nowrap"
                          >
                            Apply
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="!text-center !w-11/12 md:!w-6/12 !mx-auto !mt-44">
                <h1 className="!text-4xl md:!text-5xl sm:!text-3xl !font-semibold !tracking-tight">
                  {'Didn’t See Your Role?'}
                </h1>
                <h1 className="!text-4xl md:!text-5xl sm:!text-3xl !font-semibold !tracking-tight">
                  {'We’d still love to hear from you.'}
                </h1>
                <p className="!text-xl md:!text-lg sm:!text-base !font-semibold !mt-6">
                  {'Send us a message about what you’d like to work on.'}
                </p>
                <p className="!text-xl md:!text-lg sm:!text-base !font-semibold">
                  {'If it fits our mission, we’ll reach out.'}
                </p>
                <h4 className="!text-xl md:!text-2xl !font-semibold !mt-12 !flex !justify-center !items-center !gap-x-4">
                  <Image
                    src="/assets/images/icons/mails.svg"
                    alt="Mail Icon"
                    width={24}
                    height={24}
                    className="!animate-fade-up"
                  />
                  <span>info@kiorons.com</span>
                </h4>
              </div>
            </section>
            {/* CTA */}
            <div className="!mt-10 md:!mt-20"></div>
            <CTA
              heading="Build something the world’s never seen before."
              btnText="Explore Roles"
              href="/kone"
            />
          </div>
        </div>
      </article>
    </>
  )
}

'use client'
import { DockDemo } from '@/components/landing/Dock'
const FooterDataSet = {
  Terms: ['Privacy', 'Security', 'Other Policies', 'Terms of use'],
  Social: ['Instagram', 'LinkedIn', 'X (Twitter)'],
  Services: ['System Design', 'DevOps', 'AI Integration', 'Brand Development', 'Consult'],
  Company: ['About Us', 'Careers', 'Contact'],
  kOne: ['Feature', 'Join early access', 'Pricing'],
}
export default function Footer() {
  return (
    <footer className="@container mt-3xl mb-md">
      <div className="@md:px-md px-sm mb-xl @md:mb-2xl pt-lg text-nav max-w-container">
        <div className="@md:gap-sm @md:flex-row flex flex-col">
          <div className="mt-lg @md:mt-0 gap-lg flex w-full flex-col first:mt-0">
            <div className="flex flex-col justify-between">
              <span className="text-primary-44" role="heading" aria-level="2">
                Our Research
              </span>
              <ul className="gap-sm mt-xs flex flex-col" role="list">
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/research/index/"
                  >
                    Research Index
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/research/"
                  >
                    Research Overview
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/residency/"
                  >
                    Research Residency
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-primary-44" role="heading" aria-level="2">
                Latest Advancements
              </span>
              <ul className="gap-sm mt-xs flex flex-col" role="list">
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/index/introducing-o3-and-o4-mini/"
                  >
                    OpenAI o3
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/index/introducing-o3-and-o4-mini/"
                  >
                    OpenAI o4-mini
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/index/gpt-4o-system-card/"
                  >
                    GPT-4o
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/index/gpt-4o-mini-advancing-cost-efficient-intelligence/"
                  >
                    GPT-4o mini
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/index/sora-system-card/"
                  >
                    Sora
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-primary-44" role="heading" aria-level="2">
                Safety
              </span>
              <ul className="gap-sm mt-xs flex flex-col" role="list">
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/safety/"
                  >
                    Safety Approach
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/security-and-privacy/"
                  >
                    Security &amp; Privacy
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/trust-and-transparency/"
                  >
                    Trust &amp; Transparency
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-lg @md:mt-0 gap-lg flex w-full flex-col first:mt-0">
            <div className="flex flex-col justify-between">
              <span className="text-primary-44" role="heading" aria-level="2">
                ChatGPT
              </span>
              <ul className="gap-sm mt-xs flex flex-col" role="list">
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/chatgpt/overview/"
                  >
                    Explore ChatGPT
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/chatgpt/team/"
                  >
                    Team
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/chatgpt/enterprise/"
                  >
                    Enterprise
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/chatgpt/education/"
                  >
                    Education
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/chatgpt/pricing/"
                  >
                    Pricing
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/chatgpt/download/"
                  >
                    Download
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-primary-44" role="heading" aria-level="2">
                Sora
              </span>
              <ul className="gap-sm mt-xs flex flex-col" role="list">
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/sora/"
                  >
                    Sora Overview
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/sora/#features"
                  >
                    Features
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/sora/#pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li role="listitem">
                  <a
                    href="https://sora.com/"
                    className="transition ease-curve-a duration-250 flex flex-row items-center gap-x-[0.3em] w-fit hover:text-primary-60"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sora log in
                    <svg
                      width="9"
                      style={{ transform: 'translate(1px, -2px)' }}
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="sr-only">(opens in a new window)</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-primary-44" role="heading" aria-level="2">
                API Platform
              </span>
              <ul className="gap-sm mt-xs flex flex-col" role="list">
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/api/"
                  >
                    Platform Overview
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/api/pricing/"
                  >
                    Pricing
                  </a>
                </li>
                <li role="listitem">
                  <a
                    href="https://platform.openai.com/login"
                    className="transition ease-curve-a duration-250 flex flex-row items-center gap-x-[0.3em] w-fit hover:text-primary-60"
                    target="_blank"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                    API log in
                    <svg
                      width="9"
                      style={{ transform: 'translate(1px, -2px)' }}
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="sr-only">(opens in a new window)</span>
                  </a>
                </li>
                <li role="listitem">
                  <a
                    href="https://platform.openai.com/docs/overview"
                    className="transition ease-curve-a duration-250 flex flex-row items-center gap-x-[0.3em] w-fit hover:text-primary-60"
                    target="_blank"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                    Documentation
                    <svg
                      width="9"
                      style={{ transform: 'translate(1px, -2px)' }}
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="sr-only">(opens in a new window)</span>
                  </a>
                </li>
                <li role="listitem">
                  <a
                    href="https://community.openai.com/"
                    className="transition ease-curve-a duration-250 flex flex-row items-center gap-x-[0.3em] w-fit hover:text-primary-60"
                    target="_blank"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                    Developer Forum
                    <svg
                      width="9"
                      style={{ transform: 'translate(1px, -2px)' }}
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="sr-only">(opens in a new window)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-lg @md:mt-0 gap-lg flex w-full flex-col first:mt-0">
            <div className="flex flex-col justify-between">
              <span className="text-primary-44" role="heading" aria-level="2">
                For Business
              </span>
              <ul className="gap-sm mt-xs flex flex-col" role="list">
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/business/"
                  >
                    Business Overview
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/solutions/"
                  >
                    Solutions
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/contact-sales/"
                  >
                    Contact Sales
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-primary-44" role="heading" aria-level="2">
                Company
              </span>
              <ul className="gap-sm mt-xs flex flex-col" role="list">
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/about/"
                  >
                    About Us
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/charter/"
                  >
                    Our Charter
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/careers/"
                  >
                    Careers
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/brand/"
                  >
                    Brand
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-primary-44" role="heading" aria-level="2">
                Support
              </span>
              <ul className="gap-sm mt-xs flex flex-col" role="list">
                <li role="listitem">
                  <a
                    href="https://help.openai.com/"
                    className="transition ease-curve-a duration-250 flex flex-row items-center gap-x-[0.3em] w-fit hover:text-primary-60"
                    target="_blank"
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                    Help Center
                    <svg
                      width="9"
                      style={{ transform: 'translate(1px, -2px)' }}
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.70985 4.5H7.7804M7.7804 4.5V10.5705M7.7804 4.5L0.780396 11.5"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="sr-only">(opens in a new window)</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-between">
              <span className="text-primary-44" role="heading" aria-level="2">
                More
              </span>
              <ul className="gap-sm mt-xs flex flex-col" role="list">
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/news/"
                  >
                    News
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/stories/"
                  >
                    Stories
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/live/"
                  >
                    Livestreams
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/podcast/"
                  >
                    Podcast
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-lg @md:mt-0 gap-lg flex w-full flex-col first:mt-0">
            <div className="flex flex-col justify-between">
              <span className="text-primary-44" role="heading" aria-level="2">
                Terms &amp; Policies
              </span>
              <ul className="gap-sm mt-xs flex flex-col" role="list">
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/policies/terms-of-use/"
                  >
                    Terms of Use
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/policies/privacy-policy/"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/security-and-privacy/"
                  >
                    Security
                  </a>
                </li>
                <li role="listitem">
                  <a
                    className="transition ease-curve-a duration-250 hover:text-primary-60"
                    href="/policies/"
                  >
                    Other Policies{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="px-sm gap-md @md:gap-sm @md:flex-row @md:justify-between @md:items-center max-w-container flex w-full flex-col items-center">
        <div className="@md:w-auto @md:justify-start gap-sm @md:gap-2xs @lg:gap-sm flex justify-between">
          <a
            href="https://x.com/OpenAI"
            className="transition ease-curve-a duration-250"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M11.8187 2H13.8544L9.407 7.08308L14.639 14H10.5424L7.33377 9.80492L3.66239 14H1.62547L6.38239 8.56308L1.36331 2H5.56393L8.46424 5.83446L11.8187 2ZM11.1042 12.7815H12.2322L4.951 3.15446H3.74054L11.1042 12.7815Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="sr-only">(opens in a new window)</span>
          </a>
          <a
            href="https://www.youtube.com/OpenAI"
            className="transition ease-curve-a duration-250"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 16 16" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.4695 2.67188C14.0722 2.85846 14.5459 3.4062 14.7073 4.10321C14.9988 5.36528 15 8.00004 15 8.00004C15 8.00004 15 10.6348 14.7073 11.8969C14.5459 12.5939 14.0722 13.1416 13.4695 13.3282C12.3782 13.6667 7.99998 13.6667 7.99998 13.6667C7.99998 13.6667 3.62183 13.6667 2.53045 13.3282C1.92773 13.1416 1.45407 12.5939 1.29272 11.8969C1 10.6348 1 8.00004 1 8.00004C1 8.00004 1 5.36528 1.29272 4.10321C1.45407 3.4062 1.92773 2.85846 2.53045 2.67188C3.62183 2.33337 7.99998 2.33337 7.99998 2.33337C7.99998 2.33337 12.3782 2.33337 13.4695 2.67188ZM10.3422 8.00025L6.5319 10.2V5.80048L10.3422 8.00025Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="sr-only">(opens in a new window)</span>
          </a>
          <a
            href="https://www.linkedin.com/company/openai"
            className="transition ease-curve-a duration-250"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M13.1 2H2.9C2.66131 2 2.43239 2.09482 2.2636 2.2636C2.09482 2.43239 2 2.66131 2 2.9V13.1C2 13.3387 2.09482 13.5676 2.2636 13.7364C2.43239 13.9052 2.66131 14 2.9 14H13.1C13.3387 14 13.5676 13.9052 13.7364 13.7364C13.9052 13.5676 14 13.3387 14 13.1V2.9C14 2.66131 13.9052 2.43239 13.7364 2.2636C13.5676 2.09482 13.3387 2 13.1 2ZM5.6 12.2H3.8V6.8H5.6V12.2ZM4.7 5.75C4.49371 5.7441 4.29373 5.67755 4.12505 5.55865C3.95637 5.43974 3.82647 5.27377 3.75158 5.08147C3.67669 4.88916 3.66012 4.67905 3.70396 4.47738C3.7478 4.27572 3.8501 4.09144 3.99807 3.94758C4.14604 3.80372 4.33312 3.70666 4.53594 3.66852C4.73876 3.63038 4.94832 3.65285 5.13844 3.73313C5.32856 3.8134 5.49081 3.94793 5.60491 4.11989C5.71902 4.29185 5.77992 4.49363 5.78 4.7C5.77526 4.98221 5.659 5.25107 5.45663 5.44782C5.25426 5.64457 4.98223 5.75321 4.7 5.75ZM12.2 12.2H10.4V9.356C10.4 8.504 10.04 8.198 9.572 8.198C9.43479 8.20714 9.30073 8.24329 9.17753 8.30439C9.05433 8.36548 8.94441 8.45032 8.85409 8.55402C8.76377 8.65771 8.69483 8.77824 8.65123 8.90866C8.60762 9.03908 8.59021 9.17683 8.6 9.314C8.59702 9.34192 8.59702 9.37008 8.6 9.398V12.2H6.8V6.8H8.54V7.58C8.71552 7.313 8.95666 7.09554 9.24031 6.94846C9.52397 6.80138 9.84065 6.7296 10.16 6.74C11.09 6.74 12.176 7.256 12.176 8.936L12.2 12.2Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="sr-only">(opens in a new window)</span>
          </a>
          <a
            href="https://github.com/openai"
            className="transition ease-curve-a duration-250"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="17" viewBox="0 0 16 16" fill="none">
              <path
                d="M7.99998 1.30048C11.6833 1.30048 14.6666 4.28381 14.6666 7.96714C14.6663 9.36398 14.2279 10.7255 13.4132 11.8602C12.5985 12.9948 11.4484 13.8454 10.125 14.2921C9.79165 14.3588 9.66665 14.1505 9.66665 13.9755C9.66665 13.7505 9.67498 13.0338 9.67498 12.1421C9.67498 11.5171 9.46665 11.1171 9.22498 10.9088C10.7083 10.7421 12.2666 10.1755 12.2666 7.61714C12.2666 6.88381 12.0083 6.29214 11.5833 5.82548C11.65 5.65881 11.8833 4.97548 11.5166 4.05881C11.5166 4.05881 10.9583 3.87548 9.68331 4.74214C9.14998 4.59214 8.58331 4.51714 8.01665 4.51714C7.44998 4.51714 6.88331 4.59214 6.34998 4.74214C5.07498 3.88381 4.51665 4.05881 4.51665 4.05881C4.14998 4.97548 4.38331 5.65881 4.44998 5.82548C4.02498 6.29214 3.76665 6.89214 3.76665 7.61714C3.76665 10.1671 5.31665 10.7421 6.79998 10.9088C6.60831 11.0755 6.43331 11.3671 6.37498 11.8005C5.99165 11.9755 5.03331 12.2588 4.43331 11.2505C4.30831 11.0505 3.93331 10.5588 3.40831 10.5671C2.84998 10.5755 3.18331 10.8838 3.41665 11.0088C3.69998 11.1671 4.02498 11.7588 4.09998 11.9505C4.23331 12.3255 4.66665 13.0421 6.34165 12.7338C6.34165 13.2921 6.34998 13.8171 6.34998 13.9755C6.34998 14.1505 6.22498 14.3505 5.89165 14.2921C4.56385 13.8502 3.40893 13.0013 2.59072 11.866C1.77252 10.7307 1.33258 9.36657 1.33331 7.96714C1.33331 4.28381 4.31665 1.30048 7.99998 1.30048Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="sr-only">(opens in a new window)</span>
          </a>
          <a
            href="https://www.instagram.com/openai/?hl=en"
            className="transition ease-curve-a duration-250"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8.00002 2.80784C9.69102 2.80784 9.89138 2.81417 10.5593 2.84469C10.9608 2.84954 11.3585 2.92335 11.735 3.0629C12.0101 3.16443 12.259 3.32635 12.4633 3.53675C12.6737 3.74106 12.8356 3.98994 12.9371 4.26508C13.0767 4.64159 13.1505 5.03927 13.1554 5.44078C13.1859 6.10866 13.1922 6.30902 13.1922 8.00002C13.1922 9.69102 13.1859 9.89138 13.1554 10.5593C13.1505 10.9608 13.0767 11.3585 12.9371 11.735C12.8318 12.0082 12.6704 12.2563 12.4633 12.4633C12.2563 12.6704 12.0082 12.8318 11.735 12.9371C11.3585 13.0767 10.9608 13.1505 10.5593 13.1554C9.89138 13.1859 9.69102 13.1922 8.00002 13.1922C6.30902 13.1922 6.10866 13.1859 5.44078 13.1554C5.03908 13.1506 4.64119 13.0768 4.26451 12.9371C3.98957 12.8355 3.7409 12.6736 3.53675 12.4633C3.32635 12.259 3.16443 12.0101 3.0629 11.735C2.92335 11.3585 2.84954 10.9608 2.84469 10.5593C2.81417 9.89138 2.80784 9.69102 2.80784 8.00002C2.80784 6.30902 2.81417 6.10866 2.84469 5.44078C2.84954 5.03927 2.92335 4.64159 3.0629 4.26508C3.16443 3.98994 3.32635 3.74106 3.53675 3.53675C3.74106 3.32635 3.98994 3.16443 4.26508 3.0629C4.64159 2.92335 5.03927 2.84954 5.44078 2.84469C6.10866 2.81417 6.30902 2.80784 8.00002 2.80784ZM8.00002 1.66669C6.28023 1.66669 6.06432 1.67417 5.38896 1.70469C4.86359 1.71517 4.3438 1.81465 3.85169 1.9989C3.42889 2.15808 3.04593 2.40763 2.72954 2.73011C2.40733 3.04639 2.15799 3.42915 1.9989 3.85169C1.81484 4.34383 1.71556 4.86362 1.70526 5.38896C1.6736 6.06432 1.66669 6.28023 1.66669 8.00002C1.66669 9.71981 1.67417 9.93572 1.70469 10.6111C1.71517 11.1365 1.81465 11.6562 1.9989 12.1484C2.15808 12.5712 2.40763 12.9541 2.73011 13.2705C3.04639 13.5927 3.42915 13.8421 3.85169 14.0011C4.34383 14.1852 4.86362 14.2845 5.38896 14.2948C6.06432 14.3264 6.28023 14.3334 8.00002 14.3334C9.71981 14.3334 9.93572 14.3259 10.6111 14.2954C11.1365 14.2849 11.6562 14.1854 12.1484 14.0011C12.5692 13.8384 12.9514 13.5896 13.2705 13.2705C13.5896 12.9514 13.8384 12.5692 14.0011 12.1484C14.1852 11.6562 14.2845 11.1364 14.2948 10.6111C14.3264 9.93572 14.3334 9.71981 14.3334 8.00002C14.3334 6.28023 14.3259 6.06432 14.2954 5.38896C14.2849 4.86359 14.1854 4.3438 14.0011 3.85169C13.842 3.42889 13.5924 3.04593 13.2699 2.72954C12.9536 2.40733 12.5709 2.15799 12.1484 1.9989C11.6562 1.81484 11.1364 1.71556 10.6111 1.70526C9.93572 1.6736 9.71981 1.66669 8.00002 1.66669ZM8.00002 4.74757C7.35675 4.74757 6.72792 4.93832 6.19305 5.2957C5.65819 5.65309 5.24131 6.16105 4.99514 6.75536C4.74897 7.34967 4.68456 8.00363 4.81006 8.63454C4.93556 9.26546 5.24532 9.84499 5.70019 10.2999C6.15505 10.7547 6.73458 11.0645 7.3655 11.19C7.99641 11.3155 8.65037 11.2511 9.24468 11.0049C9.83899 10.7587 10.347 10.3419 10.7043 9.80699C11.0617 9.27212 11.2525 8.6433 11.2525 8.00002C11.2525 7.13742 10.9098 6.31014 10.2999 5.70019C9.6899 5.09023 8.86263 4.74757 8.00002 4.74757ZM8.00002 10.1113C7.58244 10.1113 7.17425 9.9875 6.82704 9.7555C6.47984 9.52351 6.20923 9.19377 6.04943 8.80798C5.88963 8.42219 5.84782 7.99768 5.92929 7.58813C6.01075 7.17857 6.21183 6.80238 6.5071 6.5071C6.80238 6.21183 7.17857 6.01075 7.58813 5.92929C7.99768 5.84782 8.42219 5.88963 8.80798 6.04943C9.19377 6.20923 9.52351 6.47984 9.7555 6.82704C9.9875 7.17425 10.1113 7.58244 10.1113 8.00002C10.1113 8.55997 9.88888 9.09699 9.49294 9.49294C9.09699 9.88888 8.55997 10.1113 8.00002 10.1113ZM11.3809 3.85917C11.2306 3.85917 11.0836 3.90374 10.9586 3.98725C10.8337 4.07076 10.7362 4.18946 10.6787 4.32833C10.6212 4.4672 10.6061 4.62001 10.6355 4.76744C10.6648 4.91487 10.7372 5.05029 10.8435 5.15657C10.9498 5.26286 11.0852 5.33524 11.2326 5.36457C11.38 5.39389 11.5328 5.37884 11.6717 5.32132C11.8106 5.2638 11.9293 5.16639 12.0128 5.04141C12.0963 4.91642 12.1409 4.76949 12.1409 4.61917C12.1409 4.41761 12.0608 4.2243 11.9183 4.08177C11.7757 3.93924 11.5824 3.85917 11.3809 3.85917Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="sr-only">(opens in a new window)</span>
          </a>
          <a
            href="https://www.tiktok.com/@openai?lang=en"
            className="transition ease-curve-a duration-250"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M13.8094 6.80899C12.6229 6.80899 11.5245 6.43201 10.6275 5.79136V10.4485C10.6275 12.7781 8.73797 14.6667 6.40715 14.6667C5.53749 14.6667 4.72917 14.4039 4.0577 13.9532C2.92947 13.1961 2.18665 11.9087 2.18665 10.4484C2.18665 8.11889 4.07622 6.23033 6.40722 6.23037C6.60093 6.23028 6.79441 6.24343 6.98631 6.26965V6.78673L6.9862 8.6027C6.80149 8.54412 6.60459 8.51233 6.40029 8.51233C5.33401 8.51233 4.46978 9.37627 4.46978 10.4418C4.46978 11.1952 4.90177 11.8477 5.53172 12.1654C5.79292 12.2971 6.08792 12.3713 6.40031 12.3713C7.4644 12.3713 8.32715 11.5109 8.33082 10.4484V1.33337H10.6275V1.6269C10.6356 1.71465 10.6472 1.80207 10.6624 1.88892C10.8218 2.79762 11.3655 3.574 12.12 4.04461C12.6267 4.36073 13.2122 4.52784 13.8094 4.52694L13.8094 6.80899Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="sr-only">(opens in a new window)</span>
          </a>
          <a
            href="https://discord.gg/openai"
            className="transition ease-curve-a duration-250"
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
          >
            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" width="17">
              <path
                d="M14.9006 4.06779C13.7837 3.56177 12.6046 3.20279 11.3934 3C11.2277 3.2932 11.0777 3.59486 10.9441 3.90372C9.65398 3.71134 8.34198 3.71134 7.05182 3.90372C6.91819 3.59489 6.76822 3.29323 6.60255 3C5.39058 3.2045 4.21068 3.56434 3.09264 4.07044C0.87304 7.32013 0.271342 10.4891 0.572191 13.6131C1.87204 14.5635 3.32695 15.2862 4.87367 15.75C5.22194 15.2865 5.53012 14.7947 5.79494 14.28C5.29196 14.0941 4.8065 13.8647 4.34417 13.5946C4.46585 13.5072 4.58485 13.4173 4.69985 13.3299C6.04511 13.956 7.51339 14.2806 8.99999 14.2806C10.4866 14.2806 11.9549 13.956 13.3001 13.3299C13.4165 13.4239 13.5355 13.5139 13.6558 13.5946C13.1926 13.8652 12.7062 14.0949 12.2024 14.2813C12.4668 14.7958 12.775 15.2871 13.1236 15.75C14.6717 15.2881 16.1277 14.5657 17.4278 13.6144C17.7808 9.99159 16.8247 6.85173 14.9006 4.06779ZM6.17601 11.6919C5.33765 11.6919 4.64502 10.939 4.64502 10.0128C4.64502 9.08655 5.31358 8.32705 6.17334 8.32705C7.0331 8.32705 7.72037 9.08655 7.70567 10.0128C7.69096 10.939 7.03043 11.6919 6.17601 11.6919ZM11.824 11.6919C10.9843 11.6919 10.2943 10.939 10.2943 10.0128C10.2943 9.08655 10.9629 8.32705 11.824 8.32705C12.6851 8.32705 13.367 9.08655 13.3523 10.0128C13.3376 10.939 12.6784 11.6919 11.824 11.6919Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="sr-only">(opens in a new window)</span>
          </a>
        </div>
        <div>
          <span className="text-nav">OpenAI © 2015–2025</span>
          <button
            type="button"
            className="text-nav decoration-gray-40 dark:decoration-gray-60 hover:decoration-copy-primary ml-2 underline underline-offset-[0.125rem]"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:Rldt9svffa:"
            data-state="closed"
          >
            Manage Cookies
          </button>
        </div>
        <div className="relative">
          <button
            type="button"
            className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] rounded-full bg-primary-4 text-primary-100 px-xs hover:bg-primary-12 disabled:bg-primary-4 disabled:text-primary-60 focus:bg-primary-12 focus:outline-primary-12"
            aria-label="Change language"
            id="radix-:R7dt9svffa:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <span className="text-cta gap-4xs flex-baseline flex">
              English<span className="text-primary-60">United States</span>
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}

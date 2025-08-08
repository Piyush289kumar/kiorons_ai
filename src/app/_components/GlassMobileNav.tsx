import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MAIN_LINKS = [
  { label: "Search", type: "search" },
  // { label: "kOne", type: "submenu", submenu: "wearable" },
  // { label: "Neural", type: "submenu", submenu: "neural" },
  { label: "kOne", href: "/kone" },
  { label: "Company", href: "/company" },
  { label: "News", href: "/blogs" },
  { label: "Career", href: "/career" },
];

const SUBMENUS = {
  wearable: {
    title: "Wearable",
    items: [
      {
        label: "A¹ Sense",
        href: "/products/a1-sense",
        icon: (
          <svg viewBox="0 0 23 23" fill="none" className="w-5 h-5">
            <path d="M22.8697 6.34183..." fill="currentColor" />
          </svg>
        ),
      },
      {
        label: "B¹ Eye",
        href: "/products/b1-eye",
        icon: (
          <svg viewBox="0 0 23 23" fill="none" className="w-5 h-5">
            <rect width="22.32" height="22.32" rx="11.16" fill="currentColor" />
          </svg>
        ),
      },
    ],
  },
  neural: {
    title: "Neural",
    items: [
      {
        label: "A¹ Neuro",
        href: "/neurals/a1-neuro",
        icon: (
          <svg viewBox="0 0 23 24" fill="none" className="w-5 h-5">
            <rect
              x="1"
              y="-1"
              width="20.32"
              height="20.3089"
              rx="10.1545"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        ),
      },
    ],
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.07,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function GlassMobileNav() {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);
  const [search, setSearch] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Keyboard escape closes
  useEffect(() => {
    if (!open && !submenu && !search) return;
    function onKey(e) {
      if (e.key === "Escape") {
        if (submenu) setSubmenu(null);
        else if (search) setSearch(false);
        else setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, submenu, search]);
  useEffect(() => {
    if (open) {
      setShouldRender(true);
    } else {
      const timeout = setTimeout(() => setShouldRender(false), 300); // match fadeOut duration
      return () => clearTimeout(timeout);
    }
  }, [open]);

  return (
    <>
      {/* Burger (shows only when closed) */}

      <button
        aria-label="Toggle menu"
        className={`absolute top-4 right-4 text-red-700 bg-[#404040]/25 backdrop-blur-md border border-white/10 rounded-full w-12 h-12 flex flex-col justify-center items-center gap-1 md:hidden transition-transform duration-300 ${
          open && "!border-none"
        }
          `}
        style={{ zIndex: 60 }}
        onClick={() => setOpen(!open)}
      >
        <span
          className={`block w-6 h-0.5 bg-zinc-300 rounded transition-transform duration-300 ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        {/* <span
          className={`block w-6 h-0.5 bg-zinc-300 rounded transition-opacity duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        /> */}
        <span
          className={`block w-6 h-0.5 bg-zinc-300 rounded transition-transform duration-300 ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Backdrop */}
      {(open || submenu || search) && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md"
          onClick={() => {
            setOpen(false);
            setSubmenu(null);
            setSearch(false);
          }}
        />
      )}

      {/* Main Menu */}

      {shouldRender && !submenu && !search && (
        <div className="fixed inset-0 z-50 flex flex-col items-stretch p-0 md:hidden">
          <div
            className={`w-full h-screen rounded-b-md bg-[#404040]/25 backdrop-blur-xs border border-white/10 shadow-2xl flex flex-col px-4 pb-8 pt-4 relative ${
              open ? "fade-in" : "fade-out"
            }`}
          >
            {/* Header bar */}

            {/* Links */}
            <ul className="mt-12 flex flex-col gap-1 px-2">
              {MAIN_LINKS.map((item, i) => (
                <motion.li
                  key={item.label}
                  className="flex items-center gap-2 px-2"
                  initial="hidden"
                  animate="visible"
                  custom={i}
                  // variants={listItemVariants}
                >
                  {/* <span className="w-6 text-zinc-400 text-xs font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span> */}
                  {item.type === "submenu" ? (
                    <button
                      type="button"
                      className="nav-list-item-link flex-1 text-[40px] leading-10 font-medium py-3 text-zinc-100 text-left hover:bg-white/10 rounded-lg transition"
                      // onClick={() => setSubmenu(item.submenu ?? )}
                    >
                      {item.label}
                    </button>
                  ) : item.type === "search" ? (
                    <button
                      type="button"
                      className="nav-list-item-link flex-1 text-[40px] leading-10 font-medium py-3 text-zinc-100 text-left hover:bg-white/10 rounded-lg transition"
                      onClick={() => setSearch(true)}
                    >
                      Search
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="nav-list-item-link flex-1 text-[40px] leading-10 font-medium py-3 text-zinc-100 text-left hover:bg-white/10 rounded-lg transition"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* SUBMENUS */}
      {submenu && (
        <div className="fixed inset-0 z-50 flex flex-col items-stretch p-0 md:hidden">
          <div className="w-full rounded-b-3xl bg-zinc-900/80 backdrop-blur-2xl shadow-2xl flex flex-col pb-10 pt-4 animate-slide-left relative">
            <div className="flex items-center justify-between px-5 py-2">
              <button
                aria-label="Go back"
                className="text-lg text-zinc-400"
                onClick={() => setSubmenu(null)}
              >
                ←
              </button>
              <span className="text-zinc-100 font-medium text-xl">
                {SUBMENUS[submenu]?.title}
              </span>
              <button
                aria-label="Close menu"
                onClick={() => {
                  setOpen(false);
                  setSubmenu(null);
                }}
                className="text-zinc-300 text-3xl px-1"
              >
                ×
              </button>
            </div>
            <div className="px-7">
              <div className="text-sm text-zinc-400 mb-3 mt-2">
                Explore Products
              </div>
              <ul className="space-y-2">
                {SUBMENUS[submenu]?.items.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span>{item.icon}</span>
                    <Link
                      href={item.href}
                      className="text-lg text-zinc-100 font-medium flex-1 py-2 hover:text-blue-200"
                      onClick={() => {
                        setOpen(false);
                        setSubmenu(null);
                      }}
                    >
                      {item.label}
                      <span className="inline-block ml-2 align-middle">
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.18 2.52L4.71 1.05L5.20 0.57l2.11 2.11 0.24 0.24-0.24 0.24-2.11 2.11-0.49-0.48L6.30 3.20H0.97V2.52h5.21z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* SEARCH PANEL */}
      {search && (
        <div className="fixed inset-0 z-50 flex flex-col items-stretch p-0 md:hidden">
          <div className="w-full rounded-b-3xl bg-zinc-900/90 backdrop-blur-2xl shadow-2xl flex flex-col pb-8 pt-4 animate-slide-left relative">
            <div className="flex items-center justify-between px-5 py-2">
              <button
                aria-label="Go back"
                className="text-lg text-zinc-400"
                onClick={() => setSearch(false)}
              >
                ←
              </button>
              <span className="text-zinc-100 font-medium text-xl">Search</span>
              <button
                aria-label="Close menu"
                onClick={() => {
                  setOpen(false);
                  setSearch(false);
                }}
                className="text-zinc-300 text-3xl px-1"
              >
                ×
              </button>
            </div>
            <div className="px-7">
              <input
                autoFocus
                className="w-full px-4 py-3 mt-4 rounded-lg bg-white/20 backdrop-blur border border-white/20 text-zinc-100 text-lg"
                placeholder="Search Here"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.getBoundingClientRect().top - sectionHeight * 0.2;
        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#0a0a1a]/95 backdrop-blur-xl border-b border-white/5 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="relative">
            <img 
              src={logo} 
              alt="Manzel Technologies" 
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-[#00f0ff]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg tracking-wide">
              MANZEL
            </span>
            <span className="text-[#00f0ff] text-[10px] font-medium tracking-[0.2em] uppercase">
              Technologies
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md px-2 py-2 rounded-full border border-white/10">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a 
                href={`#${nav.id}`}
                className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 ${
                  active === nav.id 
                    ? "bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6] text-white shadow-lg" 
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeJXKMll6484rFIUEKmYM10GXjUxCGmEyJdKQc3WyupxT5jUQ/viewform?usp=pp_url"
            className="group relative px-6 py-2.5 overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6] transition-all duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-white font-semibold text-sm">
              Get Started
            </span>
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-6 h-6 object-contain"
            />
          </button>

          <div
            className={`${
              !toggle ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
            } absolute top-20 right-4 w-64 bg-[#0a0a1a]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 p-6`}
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    onClick={() => setToggle(false)}
                    className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-all ${
                      active === nav.id 
                        ? "bg-gradient-to-r from-[#00f0ff]/20 to-[#8b5cf6]/20 text-white border border-[#00f0ff]/30" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeJXKMll6484rFIUEKmYM10GXjUxCGmEyJdKQc3WyupxT5jUQ/viewform?usp=pp_url"
              className="mt-4 block text-center px-6 py-3 bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6] text-white font-semibold rounded-xl"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

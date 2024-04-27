import Contect from "@/components/contect";
import Footer from "@/components/footer";
import Head from "@/components/head";
import Main1 from "@/components/main";
import StickyNavbar from "@/components/nav";
import Products from "@/components/products";
import Send from "@/components/sean";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    console.log(window.innerHeight);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headRef = useRef(null);
  const contectRef = useRef(null);
  const mainRef = useRef(null);
  const productRef = useRef(null);

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <StickyNavbar
        scrollTo={scrollToComponent}
        headRef={headRef}
        contectRef={contectRef}
        mainRef={mainRef}
        productRef={productRef}
      />

      {showButton && (
        <button
          className="fixed bottom-4 right-4 w-12 h-12 text-center flex items-center justify-center rounded-full text-white   bg-green-700  z-10"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 18.75 7.5-7.5 7.5 7.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}

      <div ref={headRef}>
        <Head />
      </div>
      <div className="   h-10" />
      <div ref={productRef}>
        <Products />
      </div>
      <div className="   h-10" />
      <div ref={mainRef}>
        <Main1 />
      </div>

      <Send />

      <div ref={contectRef}>
        <Contect />
      </div>

      <Footer />
    </>
  );
}

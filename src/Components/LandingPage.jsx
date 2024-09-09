import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const headingRef = useRef();
  const subheadingRef = useRef();

  useEffect(() => {
    // Animation for the first heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top center',
          toggleActions: 'play none resume reset'
        },
      }
    );

    // Animation for the second heading (with delay for sequential effect)
    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        // delay: 1, // Delay for second heading to appear after the first
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: 'top center',
          toggleActions: 'play none resume reset' 
        },
      }
    );
  }, []);

  return (
    <div
      className="flex justify-center items-center flex-col mt-40"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      <h1 ref={headingRef} className="text-6xl">Penaite</h1>
      <h1 ref={subheadingRef} className="text-5xl mt-10">The new age investing.</h1>
    </div>
  );
};

export default LandingPage;

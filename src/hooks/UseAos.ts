"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = (duration: number = 800) => {
  useEffect(() => {
    AOS.init({
      duration,
      once: true, // animate only once when scrolled into view
      easing: "ease-in-out",
    });
  }, [duration]);
};

export default useAOS;

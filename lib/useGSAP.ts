"use client";

import { useEffect, useRef } from "react";

export const useGSAP = () => {
   const scope = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (typeof window === "undefined") return;

      const { gsap } = require("gsap");

      const ctx = gsap.context(() => {
         // Floating icons animation with staggered timing
         gsap.to("[data-floating]", {
            y: -20,
            rotation: 5,
            scale: 1.05,
            duration: 3,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.2,
         });

         // Staggered entrance animation for text elements
         gsap.fromTo(
            "[data-entrance]",
            {
               opacity: 0,
               y: 50,
               scale: 0.8,
            },
            {
               opacity: 1,
               y: 0,
               scale: 1,
               duration: 0.8,
               stagger: 0.1,
               ease: "back.out(1.7)",
            }
         );

         // Pulse animation for special elements
         gsap.fromTo(
            "[data-pulse]",
            {
               scale: 1,
               opacity: 0.8,
            },
            {
               scale: 1.1,
               opacity: 1,
               duration: 2,
               ease: "power2.inOut",
               yoyo: true,
               repeat: -1,
               stagger: 0.5,
            }
         );

         // Enhanced button hover animations
         gsap.utils.toArray("button").forEach((button: any) => {
            gsap.set(button, { transformOrigin: "center" });

            button.addEventListener("mouseenter", () => {
               gsap.to(button, {
                  scale: 1.05,
                  duration: 0.3,
                  ease: "power2.out",
               });
            });

            button.addEventListener("mouseleave", () => {
               gsap.to(button, {
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out",
               });
            });
         });

         // Floating particles animation - pure GSAP
         gsap.to("[data-particle]", {
            y: -40,
            x: "random(-20, 20)",
            opacity: "random(0.3, 0.6)",
            duration: "random(2, 4)",
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.1,
         });

         // Background gradient orbs animation - pure GSAP
         gsap.to("[data-glow]", {
            scale: 1.2,
            opacity: 0.4,
            duration: 3,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 1,
         });

         // Star icon rotation animation - pure GSAP
         gsap.to("[data-spin]", {
            rotation: 360,
            duration: 3,
            ease: "none",
            repeat: -1,
         });

         // Gradient text animation - pure GSAP
         gsap.to("[data-gradient-text]", {
            backgroundPosition: "200% 50%",
            duration: 4,
            ease: "none",
            repeat: -1,
            yoyo: true,
         });

         // Shimmer effect animation - pure GSAP
         gsap.to("[data-shimmer]", {
            backgroundPosition: "200% 0",
            duration: 2,
            ease: "none",
            repeat: -1,
         });

         // Enhanced hover lift effect for floating elements
         gsap.utils.toArray("[data-floating]").forEach((element: any) => {
            element.addEventListener("mouseenter", () => {
               gsap.to(element, {
                  y: -30,
                  scale: 1.1,
                  duration: 0.3,
                  ease: "power2.out",
               });
            });

            element.addEventListener("mouseleave", () => {
               gsap.to(element, {
                  y: -20,
                  scale: 1.05,
                  duration: 0.3,
                  ease: "power2.out",
               });
            });
         });

         // Decorative elements pulse animation - pure GSAP
         gsap.utils
         .toArray("[data-decorative]")
         .forEach((element: any, index: number) => {
            gsap.to(element, {
               scale: 1.3,
               opacity: 0.8,
               duration: 2,
               ease: "power2.inOut",
               yoyo: true,
               repeat: -1,
               delay: index * 0.5,
            });
         });

         // Floating animation for icons (alternative to CSS float)
         gsap.to("[data-float]", {
            y: -15,
            duration: 2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.3,
         });

         // Delayed floating animation
         gsap.to("[data-float-delayed]", {
            y: -25,
            duration: 2.5,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            stagger: 0.4,
         });

         // Hover lift effect for interactive elements
         gsap.utils.toArray("[data-hover-lift]").forEach((element: any) => {
            element.addEventListener("mouseenter", () => {
               gsap.to(element, {
                  y: -5,
                  scale: 1.02,
                  duration: 0.3,
                  ease: "power2.out",
               });
            });

            element.addEventListener("mouseleave", () => {
               gsap.to(element, {
                  y: 0,
                  scale: 1,
                  duration: 0.3,
                  ease: "power2.out",
               });
            });
         });
      }, scope);

      return () => ctx.revert();
   }, []);

   return scope;
};

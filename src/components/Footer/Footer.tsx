"use client";

import React from "react";
import SlidingLogoMarquee from "../lightswind/sliding-logo-marquee";

const Footer = () => {
  const logos = [
    {
      id: "youtube",
      color: "#FF0000",
      href: "https://youtube.com/@andrewwatson5957",
      svgPath:
        "M19.6 3.2H4.4C2.5 3.2 1 4.7 1 6.6v10.8c0 1.9 1.5 3.4 3.4 3.4h15.2c1.9 0 3.4-1.5 3.4-3.4V6.6c0-1.9-1.5-3.4-3.4-3.4zM10 15.5V8.5l6 3.5-6 3.5z",
    },
    {
      id: "instagram",
      color: "#E1306C",
      href: "https://instagram.com/_a.r_k.o_ ",
      svgPath:
        "M12 2.2c3 0 3.4 0 4.6.1 1.2.1 2 .3 2.5.6.6.3 1 .7 1.3 1.3.3.5.5 1.3.6 2.5.1 1.2.1 1.6.1 4.6s0 3.4-.1 4.6c-.1 1.2-.3 2-.6 2.5-.3.6-.7 1-1.3 1.3-.5.3-1.3.5-2.5.6-1.2.1-1.6.1-4.6.1s-3.4 0-4.6-.1c-1.2-.1-2-.3-2.5-.6-.6-.3-1-.7-1.3-1.3-.3-.5-.5-1.3-.6-2.5C2.2 15.4 2.2 15 2.2 12s0-3.4.1-4.6c.1-1.2.3-2 .6-2.5.3-.6.7-1 1.3-1.3.5-.3 1.3-.5 2.5-.6C8.6 2.2 9 2.2 12 2.2zm0 2.2C9 4.4 8.6 4.4 7.5 4.5c-.9.1-1.4.2-1.7.4-.4.2-.6.4-.8.8-.2.3-.3.8-.4 1.7C4.4 8.6 4.4 9 4.4 12s0 3.4.1 4.5c.1.9.2 1.4.4 1.7.2.4.4.6.8.8.3.2.8.3 1.7.4 1.1.1 1.5.1 4.5.1s3.4 0 4.5-.1c.9-.1 1.4-.2 1.7-.4.4-.2.6-.4.8-.8.2-.3.3-.8.4-1.7.1-1.1.1-1.5.1-4.5s0-3.4-.1-4.5c-.1-.9-.2-1.4-.4-1.7-.2-.4-.4-.6-.8-.8-.3-.2-.8-.3-1.7-.4C15.4 4.4 15 4.4 12 4.4zm0 3.3a4.3 4.3 0 110 8.6 4.3 4.3 0 010-8.6zm5.3-.9a1 1 0 11-2 0 1 1 0 012 0z",
    },
    {
      id: "whatsapp",
      color: "#25D366",
      href: "https://wa.me/8801867747152",
      svgPath:
        "M12 2a10 10 0 00-8.7 14.9L2 22l5.3-1.3A10 10 0 1012 2zm5.1 14.3c-.2.6-1.2 1.1-1.7 1.1-.4 0-.8.1-2.7-.9-2.3-1.3-3.7-3.2-3.8-3.3-.1-.1-.9-1.2-.9-2.3 0-1.1.6-1.6.8-1.8.2-.2.4-.3.6-.3.1 0 .3 0 .4.01.1.01.3-.05.5.4.2.5.7 1.7.8 1.8.1.1.1.3 0 .5-.1.2-.2.3-.3.5-.1.1-.2.2-.3.3-.1.1-.2.2-.1.4.1.2.5.9 1.1 1.4.7.7 1.3.9 1.5 1 .2.1.3.1.5 0 .2-.1 1.2-.6 1.4-.8.2-.1.3-.1.5 0 .2.1 1.3.6 1.5.7.2.1.4.2.5.3.1.1.1.3.1.4z",
    },
    {
      id: "facebook",
      color: "#1877F2",
      href: "https://www.facebook.com/ArKooSaHaa",
      svgPath:
        "M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-2v7A10 10 0 0022 12z",
    },
    {
      id: "linkedin",
      color: "#0A66C2",
      href: "https://linkedin.com/in/aarkosaahaa",
      svgPath:
        "M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3zM9 9h3.8v1.67h.05c.53-1 1.82-2.05 3.75-2.05C20.7 8.62 21 11.06 21 14.27V21h-4v-6.14c0-1.46-.03-3.33-2.03-3.33-2.03 0-2.34 1.59-2.34 3.22V21H9V9z",
    },
    {
      id: "github",
      color: "#000000",
      href: "https://github.com/ArKooSaHaa",
      svgPath:
        "M12 .296a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.31 3.48 1 .11-.77.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.9 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.38.82 1.13.82 2.28v3.38c0 .32.21.7.83.58A12 12 0 0012 .296z",
    },
  ];

  return (
    <footer className="mt-12 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-0">

      <div className="w-full px-0 py-8">

        {/* Title */}
        <h4 className="text-center text-sm text-gray-400 dark:text-gray-500 mb-4">
          Worked with / Featured on
        </h4>

        {/* Inner Box */}
        <div className="w-full rounded-xl p-6 bg-slate-50 dark:bg-slate-800/50 text-black dark:text-white shadow-lg dark:shadow-2xl backdrop-blur-sm">

          <SlidingLogoMarquee
            items={logos.map((l, i) => ({
              id: l.id || i,
              content: (
                <div
                  style={{ color: l.color }}
                  className="flex items-center justify-center w-full h-full"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-12 h-12 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={l.svgPath} />
                  </svg>
                </div>
              ),
              href: l.href,
            }))}
            speed={30}
            pauseOnHover={true}
            enableBlur={false}
            height="90px"
            gap="3rem"
            autoPlay={true}
            showControls={false}
            className="w-full"
            width="100%"
          />
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-6">
          © {new Date().getFullYear()} Arkosaha — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

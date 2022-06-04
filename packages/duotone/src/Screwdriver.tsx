import * as React from "react";
import { SVGProps } from "react";

const SvgScrewdriver = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="screwdriver_svg__fa-primary"
      d="M128 278.6 10.9 395.5c-14.5 14.62-14.5 38.29 0 52.79l52.75 52.75c14.5 14.5 38.17 14.5 52.79 0L233.4 384c29.12-29.12 29.12-76.25 0-105.4s-76.3-29.1-105.4 0z"
    />
    <path
      d="M511.1 64 416 192h-61.99l-106.7 106.6c-3.51-7.2-8.01-14-13.91-20s-12.8-10.4-20-13.9L320 158l-.9-62 128-96 64 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgScrewdriver;

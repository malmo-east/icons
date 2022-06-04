import * as React from "react";
import { SVGProps } from "react";

const SvgPills = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="pills_svg__fa-primary"
      d="m224 256-.002 111.1c0 61.88-50.12 111.1-112 111.1S0 429.9 0 367.1V256h224z"
    />
    <path
      d="M299.8 226.2c-3.5-3.5-9.5-3-12.38.875-45.25 62.5-40.38 150.1 15.88 206.4 56.38 56.25 144 61.25 206.5 15.88 4-2.875 4.25-8.75.75-12.25L299.8 226.2zm229.7-19c-56.25-56.25-143.9-61.12-206.4-15.87-4 2.97-4.3 8.97-.8 12.47l210.9 210.7c3.5 3.501 9.375 3.125 12.25-.75C590.8 351.1 585.9 263.6 529.5 207.2zM112 32C50.12 32 0 82.12 0 143.1V256h224V143.1C224 82.12 173.9 32 112 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPills;

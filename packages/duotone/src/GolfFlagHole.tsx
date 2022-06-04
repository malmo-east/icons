import * as React from "react";
import { SVGProps } from "react";

const SvgGolfFlagHole = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="golf-flag-hole_svg__fa-primary"
      d="M384 128c0 6.157-3.194 12.31-9.585 15.51L176 242.7v202.6c-28.2-4.9-48-16.2-48-29.3V17.36C128 7.31 136.249 0 145.35 0c2.57 0 5.207.584 7.746 1.853L374.4 112.5c6.4 3.2 9.6 9.4 9.6 15.5z"
    />
    <path
      d="M512 416c0 53.02-114.6 96-256 96S0 469.02 0 416c0-35.51 51.55-66.45 128-83.05V416c0 17.67 35.82 32 80 32s80-14.33 80-32-35.82-32-80-32c-11.39 0-22.19.984-32 2.701v-61.85C201.2 321.7 228 320 256 320c141.4 0 256 42.1 256 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGolfFlagHole;

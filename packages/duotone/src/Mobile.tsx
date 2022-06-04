import * as React from "react";
import { SVGProps } from "react";

const SvgMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="mobile_svg__fa-primary"
      d="M352 48v336H32V48C32 21.5 53.5 0 80 0h224c26.5 0 48 21.5 48 48z"
    />
    <path
      d="M32 384v80c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48v-80H32zm208 63.1c0 9.7-7.2 16.9-16 16.9h-64.9c-7.9 0-15.1-7.2-15.1-16s7.2-16 16-16h64c8.8 0 16 7.2 16 15.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMobile;

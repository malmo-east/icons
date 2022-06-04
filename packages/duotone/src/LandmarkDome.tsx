import * as React from "react";
import { SVGProps } from "react";

const SvgLandmarkDome = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="landmark-dome_svg__fa-primary"
      d="M264 0c13.3 0 24 10.75 24 24v10.65C368.4 48.14 431.9 111.6 445.3 192h2.7c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h2.65C80.14 111.6 143.6 48.14 224 34.65V24c0-13.25 10.7-24 24-24h16z"
    />
    <path
      d="M127.1 416h40V288h64v128H280V288h64v128h40V288h64v132.3c.6.3 1.2-.2 1.8 1.1l48 32c11.7 7.8 16.9 22.4 12.8 35.9-4.1 13.5-16.5 22.7-30.6 22.7H31.1c-13.2 0-25.642-9.2-29.728-22.7-4.087-13.5 1.143-28.1 12.878-35.9l48-32c.57-1.3 1.15-.8.85-1.1V288h64v128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLandmarkDome;

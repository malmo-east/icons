import * as React from "react";
import { SVGProps } from "react";

const SvgBoot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="boot_svg__fa-primary"
      d="M0 448v32l32 32h64l32-32 32 32h64l32-32 32 32h64l32-32 32 32h64l32-32v-32H0zM352 80V16c0-8.75-7.2-16-16-16H16C7.25 0 0 7.25 0 16v80h336c8.8 0 16-7.25 16-16z"
    />
    <path
      d="M512 378.1V448H0V96h320v64h-48c-8.8 0-16 7.2-16 16s7.2 16 15.1 16H320v32h-48c-8.8 0-16 7.2-16 16s7.2 16 15.1 16H320l119.2 29.75C481.1 296.5 512 334.8 512 378.1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBoot;

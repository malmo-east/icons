import * as React from "react";
import { SVGProps } from "react";

const SvgLaptop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path className="laptop_svg__fa-primary" d="M512 352H128V96h384v256z" />
    <path
      d="M624 383.1H16c-8.75 0-16 7.25-16 16v16c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16c0-7.9-7.2-16-16-16zM128 96h384v256h64V80c0-26.38-21.62-48-48-48H112c-26.38 0-48 21.62-48 48v272h64V96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLaptop;

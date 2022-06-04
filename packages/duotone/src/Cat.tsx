import * as React from "react";
import { SVGProps } from "react";

const SvgCat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="cat_svg__fa-primary"
      d="M488 144c-8.875 0-16 7.125-16 16s7.125 16 16 16 16-7.125 16-16-7.1-16-16-16zm-80 0c-8.875 0-16 7.125-16 16s7.125 16 16 16 16-7.125 16-16-7.1-16-16-16zM160 278v10l64 32-27.7-83.9c-12.8 11.7-25.2 25.1-36.3 41.9zm128 10v-93.1c-13.8 2.334-30.18 6.607-47.33 14.22L288 288z"
    />
    <path
      d="M322.6 192c-6.2 0-18.7.2-34.6 2.9V288l-47.3-78.9c-14.7 6.5-29.8 15.5-44.4 27L224 320l-64-32v-96c0-53-43-96-96-96-17.62 0-32 14.4-32 32s14.38 32 32 32 32 14.38 32 32v256c0 35.25 28.75 64 64 64h176c8.875 0 16-7.125 16-15.1V480c0-17.62-14.38-32-32-32h-32l128-96v144c0 8.875 7.125 16 16 16h32c8.875 0 16-7.125 16-16V289.9c-10.25 2.625-20.88 4.5-32 4.5-61.7 0-113.5-44-125.4-102.4zM480 96h-64l-64-64v134.4c0 53 43 95.1 96 95.1s96-42.1 96-95.1V32l-64 64zm-72 80c-8.875 0-16-7.125-16-16s7.125-16 16-16 16 7.125 16 16-7.1 16-16 16zm80 0c-8.875 0-16-7.125-16-16s7.125-16 16-16 16 7.125 16 16-7.1 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCat;

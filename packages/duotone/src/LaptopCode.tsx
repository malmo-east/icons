import * as React from "react";
import { SVGProps } from "react";

const SvgLaptopCode = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="laptop-code_svg__fa-primary"
      d="M128 96v256h384V96H128zm146.1 161.9c7.812 7.812 7.812 20.5 0 28.31-3.9 3.89-9 5.79-14.1 5.79s-10.2-1.9-14.1-5.8l-48-48c-7.812-7.812-7.812-20.5 0-28.31l48-48c7.812-7.812 20.47-7.812 28.28 0s7.812 20.5 0 28.31L240.3 224l33.8 33.9zm168-19.7-48 48c-3.9 3.9-9 5.8-14.1 5.8s-10.23-1.938-14.14-5.844c-7.812-7.812-7.812-20.5 0-28.31l33.86-33.84-33.86-33.84c-7.812-7.812-7.812-20.5 0-28.31s20.47-7.812 28.28 0l48 48c6.96 7.844 6.96 20.544-.04 28.344z"
    />
    <path
      d="M128 96h384v256h64V80c0-26.37-21.6-48-48-48H112c-26.37 0-48 21.63-48 48v272h64V96zm496 288H16c-8.75 0-16 7.3-16 16v16c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16c0-8.7-7.2-16-16-16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgLaptopCode;
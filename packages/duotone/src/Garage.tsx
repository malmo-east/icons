import * as React from "react";
import { SVGProps } from "react";

const SvgGarage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="garage_svg__fa-primary"
      d="M40.23 111.9 308.1 4.753a32.087 32.087 0 0 1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24V223.1c0-16.8-14.3-32-32-32H128c-17.7 0-32 15.2-32 32V488c0 13.3-10.75 24-24 24H24c-13.25 0-24-10.7-24-24V171.3c0-26.1 15.93-49.7 40.23-59.4z"
    />
    <path
      d="M512 320H128v-96h384v96zm-384 32h384v160H128V352zm144 96h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16s7.2 16 16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGarage;

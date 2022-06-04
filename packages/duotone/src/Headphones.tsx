import * as React from "react";
import { SVGProps } from "react";

const SvgHeadphones = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="headphones_svg__fa-primary"
      d="M80 256c-44.11 0-80 35.9-80 80.1l.004 63.81C.004 444.1 35.89 480 80 480c26.5 0 48-21.6 48-48.1V304.1c0-26.5-21.5-48.1-48-48.1zm352 0c-26.5 0-48 21.6-48 48.1V432c0 26.4 21.5 48 48 48 44.11 0 79.1-35.88 79.1-80.06l.9-63.84c0-44.2-35.9-80.1-80-80.1z"
    />
    <path
      d="M511.1 399.9s0 .1 0 0c0-.8 0 0 0 0zm-511.096 0c0-.8 0 0 0 0s0 .1 0 0zM256 32C112.9 32 4.563 151.1 0 288v48.13c0-33.47 20.64-62.13 49.8-74.1C62.66 159.6 150.2 80.14 256 80.13c105.8.014 193.3 79.49 206.2 181.9C491.4 273.1 512 302.7 512 336.1v-48.2C507.4 151 399.1 32 256 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHeadphones;

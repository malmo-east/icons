import * as React from "react";
import { SVGProps } from "react";

const SvgFlask = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M437.2 403.5 319.1 215V48h7.998c13.25 0 23.1-10.75 23.1-24S341.2 0 327.1 0H120c-13.2 0-23.99 10.75-23.99 24S106.8 48 120 48h7.998L128 215 10.8 403.5C-18.48 450.6 15.27 512 70.89 512h306.2c55.61 0 89.41-61.5 60.11-108.5zm-318-83.5 56.78-91.29V48h95.98v180.7L328.8 320H119.2z" />
  </svg>
);

export default SvgFlask;

import * as React from "react";
import { SVGProps } from "react";

const SvgShop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 185.8c0-6.4 1.606-12.7 4.67-18.4L82.36 25.02A47.955 47.955 0 0 1 124.5 0h391c17.6 0 33.7 9.595 42.1 25.02l77.7 142.38c3.1 5.7 4.7 12 4.7 18.4 0 21.1-17.1 38.2-38.2 38.2H576v264c0 13.3-10.7 24-24 24s-24-10.7-24-24V224H384v248c0 22.1-17.9 40-40 40H103.1c-21.19 0-40-17.9-40-40V224H38.25C17.12 224 0 206.9 0 185.8zM111.1 224v96H336v-96H111.1zm13.4-176L54.68 176H585.3L515.5 48h-391zM336 464v-96H111.1v96H336z" />
  </svg>
);

export default SvgShop;
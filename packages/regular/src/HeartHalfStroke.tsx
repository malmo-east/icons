import * as React from "react";
import { SVGProps } from "react";

const SvgHeartHalfStroke = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M119.4 44.1c44.7-7.59 92 7.27 124.6 39.9l11.1 12 12-11.98C300.6 51.37 347 36.51 392.6 44.1c68.9 11.48 119.4 71.1 119.4 141v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9L47.59 300.4C17.23 272.1 0 232.4 0 190.9v-5.8C0 115.2 50.52 55.58 119.4 44.09v.01zm135.7 119.8v265.4l176.6-164c20.6-19.2 32.3-46.2 32.3-74.4v-5.8c0-46.4-33.6-86.03-79.3-93.66-30.3-5.04-61.1 4.84-82.8 25.66l-46.8 46.8z" />
  </svg>
);

export default SvgHeartHalfStroke;
import * as React from "react";
import { SVGProps } from "react";

const SvgHeartHalfStroke = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="heart-half-stroke_svg__fa-primary"
      d="M256 480c-10.3 0-20.2-3.9-27.7-10.9L47.59 300.4C17.23 272.1 0 232.4 0 190.9v-5.8C0 115.2 50.52 55.58 119.4 44.09c44.7-7.58 92 7.29 124.6 39.93L256 96v384z"
    />
    <path
      d="m256 407.4 164.7-153.8a85.66 85.66 0 0 0 27.3-62.7v-5.8c0-38.6-27.9-71.5-66-77.9-25.1-4.2-50.7 4-68.8 22.1L256 186.5V96l11.1-11.98C300.6 51.37 347 36.51 392.6 44.1c68.9 11.48 119.4 71.1 119.4 141v5.8c0 41.5-17.2 81.2-47.6 109.5L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9v-72.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHeartHalfStroke;

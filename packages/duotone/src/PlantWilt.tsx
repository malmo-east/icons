import * as React from "react";
import { SVGProps } from "react";

const SvgPlantWilt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="plant-wilt_svg__fa-primary"
      d="M512 203.1c0 28-35.8 79.4-80 116.9-44.2-37.5-80-87.6-80-116.9 0-47.3 32.9-75.1 80-75.1s80 27.8 80 75.1zm-352 128c0 28-35.8 79.4-80 116.9-44.17-37.5-80-87.6-80-116.9C0 283.8 32.92 256 80 256c47.1 0 80 27.8 80 75.1z"
    />
    <path
      d="M288 512h-64V248c0-30.9-25.1-56-56-56s-56 25.1-56 56v12.1c-9.6-2.4-20.38-4.1-32-4.1-11.62 0-22.38 1.7-32 4.1V248c0-66.3 53.7-120 120-120 20.2 0 39.3 5 56 13.8V120C224 53.73 277.7 0 344 0s120 53.73 120 120v12.1c-9.6-2.4-20.4-4.1-32-4.1-11.6 0-22.4 1.7-32 4.1V120c0-30.93-25.1-56-56-56s-56 25.07-56 56v392z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPlantWilt;

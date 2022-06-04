import * as React from "react";
import { SVGProps } from "react";

const SvgTruckPickup = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="truck-pickup_svg__fa-primary"
      d="M418.6 56.02 527.4 192H576c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-26.8c-18-37.8-56.5-64-101.2-64s-83.2 26.2-101.2 64H261.2c-18-37.8-56.5-64-101.2-64s-83.25 26.2-101.22 64H32c-17.67 0-32-14.3-32-32s14.33-32 32-32v-64c0-17.7 14.33-32 32-32h160V80c0-26.51 21.5-48 48-48h96.6c19.5 0 37.9 8.84 50 24.02zM288 192h157.4l-76.8-96H288v96z"
    />
    <path
      d="M80 400c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80zm320 0c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTruckPickup;

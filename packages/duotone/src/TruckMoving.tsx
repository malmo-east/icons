import * as React from "react";
import { SVGProps } from "react";

const SvgTruckMoving = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="truck-moving_svg__fa-primary"
      d="M416 32c35.3 0 64 28.65 64 64v48h48.8c16.8 0 32.7 7.5 43.4 20.5l57.9 71.9c6.7 7.1 9.9 16.1 9.9 25.3V352c0 8.8-3.6 16.8-9.4 22.6-15.4-32.3-48.4-54.6-86.6-54.6-41.8 0-77.4 26.7-90.5 64h-107c-13.1-37.3-48.7-64-90.5-64-33.4 0-62.8 17-80 42.9C158.8 337 129.4 320 96 320c-41.8 0-77.36 26.7-90.537 64H0V96c0-35.35 28.65-64 64-64h352zm119 162.9a8.14 8.14 0 0 0-6.2-2.9H480v64h104.1L535 194.9z"
    />
    <path
      d="M160 416c0 35.3-28.7 64-64 64-35.35 0-64-28.7-64-64s28.65-64 64-64c35.3 0 64 28.7 64 64zm160 0c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm288 0c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTruckMoving;

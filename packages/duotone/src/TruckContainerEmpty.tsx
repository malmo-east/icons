import * as React from "react";
import { SVGProps } from "react";

const SvgTruckContainerEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="truck-container-empty_svg__fa-primary"
      d="M528.8 144c16.8 0 32.7 7.5 43.4 20.5l57.9 71.9c6.7 7.1 9.9 16.1 9.9 25.3V352c0 8.8-3.6 16.8-9.4 22.6-15.4-32.3-48.4-54.6-86.6-54.6-41.8 0-77.4 26.7-90.5 64h-107c-13.1-37.3-48.7-64-90.5-64-33.4 0-62.8 17-80 42.9C158.8 337 129.4 320 96 320c-38.2 0-71.19 22.3-86.644 54.6C3.575 368.8 0 360.8 0 352v-16c0-17.7 14.33-32 32-32h400V168c0-13.3 10.7-24 24-24h72.8zm6.2 50.9a8.14 8.14 0 0 0-6.2-2.9H480v64h104.1L535 194.9z"
    />
    <path
      d="M160 416c0 35.3-28.7 64-64 64-35.35 0-64-28.7-64-64s28.65-64 64-64c35.3 0 64 28.7 64 64zm160 0c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm288 0c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTruckContainerEmpty;

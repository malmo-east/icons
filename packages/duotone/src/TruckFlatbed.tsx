import * as React from "react";
import { SVGProps } from "react";

const SvgTruckFlatbed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="truck-flatbed_svg__fa-primary"
      d="M640 384c0 17.7-14.3 32-32 32h-33.1c-7.8-54.3-54.5-96-110.9-96-56.4 0-103.1 41.7-110.9 96h-66.2c-3.6-24.9-15.4-47.2-32.5-64H352V128c0-17.7 14.3-32 32-32h82.7c17 0 32.4 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32zm-96-128v-18.7L466.7 160H416v96h128zM97.62 352c-17.15 16.8-28.92 39.1-32.49 64H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h65.62z"
    />
    <path
      d="M96 432c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80zm288 0c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTruckFlatbed;

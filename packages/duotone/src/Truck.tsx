import * as React from "react";
import { SVGProps } from "react";

const SvgTruck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="truck_svg__fa-primary"
      d="M368 0c26.5 0 48 21.49 48 48v48h50.7c17 0 32.4 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-33.1c-7.8-54.3-54.5-96-110.9-96-56.4 0-103.1 41.7-110.9 96h-66.2c-7.8-54.3-54.5-96-110.9-96-56.4 0-103.1 41.7-110.87 96H48c-26.51 0-48-21.5-48-48V48C0 21.49 21.49 0 48 0h320zm48 160v96h128v-18.7L466.7 160H416z"
    />
    <path
      d="M96 432c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80zm288 0c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTruck;

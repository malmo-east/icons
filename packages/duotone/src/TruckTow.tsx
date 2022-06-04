import * as React from "react";
import { SVGProps } from "react";

const SvgTruckTow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="truck-tow_svg__fa-primary"
      d="M498.7 96c17 0 32.4 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V376c0 19.8-14.4 36.2-33.2 39.4-8-54-54.6-95.4-110.8-95.4-56.4 0-103.1 41.7-110.9 96h-98.2c-7.8-54.3-54.5-96-110.9-96-56.4 0-103.1 41.7-110.87 96H48c-26.51 0-48-21.5-48-48v-64c0-26.5 21.49-48 48-48h336V128c0-17.7 14.3-32 32-32h82.7zM576 256v-18.7L498.7 160H448v96h128z"
    />
    <path
      d="M96 0h49.5c9.2 0 18 3.983 24.1 10.93L384 256H192L96 64v112c0 26.5-21.49 48-48 48S0 202.5 0 176v-16c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16v16c0 8.8 7.16 16 16 16s16-7.2 16-16V32C64 14.33 78.33 0 96 0zm160 432c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80 80 35.8 80 80zm160 0c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTruckTow;

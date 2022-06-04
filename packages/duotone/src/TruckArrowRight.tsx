import * as React from "react";
import { SVGProps } from "react";

const SvgTruckArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="truck-arrow-right_svg__fa-primary"
      d="M0 48C0 21.49 21.49 0 48 0h320c26.5 0 48 21.49 48 48v48h50.7c17 0 32.4 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V352c17.7 0 32 14.3 32 32s-14.3 32-32 32h-33.1c-7.8-54.3-54.5-96-110.9-96-56.4 0-103.1 41.7-110.9 96h-66.2c-7.8-54.3-54.5-96-110.9-96-56.4 0-103.1 41.7-110.87 96H48c-26.51 0-48-21.5-48-48V48zm544 208v-18.7L466.7 160H416v96h128zM256.1 79.03c-8.5-9.37-23.7-9.37-33.1 0-9.3 9.37-9.3 24.57 0 33.07l39.1 39.9H96c-13.25 0-24 10.7-24 24s10.75 24 24 24h166.1L223 239c-9.3 9.4-9.3 24.6 0 33.1 9.4 10.2 24.6 10.2 33.1 0l80-80c10.2-8.5 10.2-23.7 0-33.1l-80-79.97z"
    />
    <path
      d="M223 79.03c9.4-9.37 24.6-9.37 33.1 0l80 79.97c10.2 9.4 10.2 24.6 0 33.1l-80 80c-8.5 10.2-23.7 10.2-33.1 0-9.3-8.5-9.3-23.7 0-33.1l39.1-39H96c-13.25 0-24-10.7-24-24s10.75-24 24-24h166.1L223 112.1c-9.3-8.5-9.3-23.7 0-33.07zM256 432c0 44.2-35.8 80-80 80s-80-35.8-80-80 35.8-80 80-80 80 35.8 80 80zm128 0c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTruckArrowRight;
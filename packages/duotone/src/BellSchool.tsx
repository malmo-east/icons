import * as React from "react";
import { SVGProps } from "react";

const SvgBellSchool = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="bell-school_svg__fa-primary"
      d="M160 208c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48zm48 208c55.9 0 106.6-22.9 144-57.9V464h40c18.6 0 34.7-10.6 42.7-26-11.4-8.8-18.7-22.5-18.7-38 0-26.5 21.5-48 48-48s48 21.5 48 48c0 19.4-11.5 36.1-28.9 43.7-11 39.5-47.7 68.3-91.1 68.3H112c-26.51 0-48-21.5-48-48V358.1c37.4 35 88.1 57.9 144 57.9z"
    />
    <path
      d="M416 208c0 114.9-93.1 208-208 208C93.12 416 0 322.9 0 208 0 93.12 93.12 0 208 0c114.9 0 208 93.12 208 208zm-208-80c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBellSchool;

import * as React from "react";
import { SVGProps } from "react";

const SvgHouse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="house_svg__fa-primary"
      d="M266.9 7.918c11.2-10.557 30.1-10.557 42.2 0l256 223.982c13.3 11.7 14.6 31.9 3 45.2-11.7 13.3-31.9 14.6-45.2 3L288 74.52 53.07 280.1c-13.3 11.6-33.51 10.3-45.152-3-11.638-13.3-10.29-33.5 3.012-45.2L266.9 7.918z"
    />
    <path
      d="M288 74.52 512.1 270.6l.4 201.3c.1 22.1-17.8 40.1-40 40.1H392c-22.1 0-40-17.9-40-40v-88.3c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32V472c0 22.1-17.9 40-40 40h-79.9c-23 0-40.01-17.9-40.02-40l-.06-201.5L288 74.52z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHouse;

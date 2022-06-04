import * as React from "react";
import { SVGProps } from "react";

const SvgMessageArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 10.6 5.9 15.6 12.2 15.6 2.369 0 4.785-.746 6.947-2.324L304 415.1h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zm48 351.1c0 26.46-21.53 47.1-48 47.1H298.7L176 492.1v-92.09H64c-26.47 0-48-21.53-48-47.1V63.99C16 37.53 37.53 15.1 64 15.1h384c26.47 0 48 21.53 48 47.1v288.9zM346.9 200.6c-.875-.344-1.609-.656-2.5-.656-5.123 0-15.6 10.37-80.44 76.5V120c0-4.406-3.578-8-8-8s-7.96 3.6-7.96 8v156.7l-74.3-74.4c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31l88 88c1.41 1.59 3.51 2.39 5.61 2.39s4.219-.875 5.719-2.406c30.45-31.06 80.17-81.41 86.47-86.78a7.895 7.895 0 0 0 3.25-3.875C353.1 206.8 351 202.2 346.9 200.6z" />
  </svg>
);

export default SvgMessageArrowDown;

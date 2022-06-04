import * as React from "react";
import { SVGProps } from "react";

const SvgOilCan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M288 128v32h80.9c9.9 0 19.7 2.3 28.6 6.8L448 192l167-35.8c18.1-3.9 30.7 17.6 18.5 31.5L451.1 394.3c-13 13.8-29.6 21.7-48 21.7H144c-26.5 0-48-21.5-48-48v-21.3l-67.49-30C11.17 308.1 0 291.8 0 272.8V208c0-26.5 21.49-48 48-48h176v-32h-32c-17.7 0-32-14.3-32-32 0-17.67 14.3-32 32-32h128c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32h-32zM96 208H48v64.8l48 21.3V208z" />
  </svg>
);

export default SvgOilCan;

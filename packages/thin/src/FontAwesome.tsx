import * as React from "react";
import { SVGProps } from "react";

const SvgFontAwesome = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 48v336c-63.09 22.54-82.34 32-119.5 32-62.82 0-86.6-32-149.3-32-46.49 0-70.61 17.3-105.3 26.39-5 1.31-9.9-2.39-9.9-7.49 0-3.633 2.57-6.705 6.102-7.547C106.9 386.6 131 368 179.2 368c62.73 0 86.51 32 149.3 32 33.72 0 53.04-7.918 103.5-26.22v-304C381.6 88.08 362.3 96 328.5 96c-62.82 0-86.6-32-149.3-32C116.3 64 94.83 96 32 96c-5.7 0-10.95-.36-16-.89V472c0 4.4-3.58 8-8 8s-8-3.6-8-8V40c0-4.42 3.582-8 8-8s8 3.58 8 8v39.11c5.05.53 10.3.89 16 .89 62.83 0 84.33-32 147.2-32 62.73 0 86.51 32 149.3 32 37.2 0 56.4-9.46 119.5-32z" />
  </svg>
);

export default SvgFontAwesome;
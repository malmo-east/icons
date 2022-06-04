import * as React from "react";
import { SVGProps } from "react";

const SvgChartMixed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M335.6 218.2c-9 6.9-22.4 7.7-31.4-.1L190 118.2 37.31 219.1c-11.02 8.2-25.93 5.2-33.277-5.8-7.353-11-4.373-25.9 6.657-33.3L178.7 68.03c9-6.02 20.9-5.23 29.1 1.91l112.4 98.26L472.4 37.78c10-8.63 25.2-7.46 33.8 2.6 8.7 10.06 7.5 25.21-2.6 33.84l-168 143.98zM240 271.1v160c0 27.4-21.5 48-48 48s-48-20.6-48-48v-160c0-25.6 21.5-48 48-48s48 22.4 48 48zm-40 160v-160c0-3.5-3.6-8-8-8s-8 4.5-8 8v160c0 5.3 3.6 8 8 8s8-2.7 8-8zm-88-64v64c0 27.4-21.49 48-48 48s-48-20.6-48-48v-64c0-25.6 21.49-48 48-48s48 22.4 48 48zm-40 64v-64c0-3.5-3.58-8-8-8s-8 4.5-8 8v64c0 5.3 3.58 8 8 8s8-2.7 8-8zm200-96c0-25.6 21.5-48 48-48s48 22.4 48 48v96c0 27.4-21.5 48-48 48s-48-20.6-48-48v-96zm48-8c-4.4 0-8 4.5-8 8v96c0 5.3 3.6 8 8 8s8-2.7 8-8v-96c0-3.5-3.6-8-8-8zm176-56v160c0 27.4-21.5 48-48 48s-48-20.6-48-48v-160c0-25.6 21.5-48 48-48s48 22.4 48 48zm-40 160v-160c0-3.5-3.6-8-8-8s-8 4.5-8 8v160c0 5.3 3.6 8 8 8s8-2.7 8-8z" />
  </svg>
);

export default SvgChartMixed;

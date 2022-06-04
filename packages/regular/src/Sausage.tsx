import * as React from "react";
import { SVGProps } from "react";

const SvgSausage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m447.9 69.88 15.11-45.74c1.89-5.5.99-11.76-2.51-16.515C457 2.875 451.5 0 445.6 0h-59.25C380.5 0 375 2.875 371.5 7.625 368 12.38 367.1 18.64 369 24.14l15.25 45.73C346.9 83 320 118.2 320 160c0 88.25-71.75 160-160 160-41.75 0-77 26.88-90.12 64.13L24.14 369c-5.5-1.9-11.76-1-16.515 2.5C2.875 375 0 380.5 0 386.4v59.25C0 451.5 2.875 457 7.625 460.5c4.75 3.375 11.02 4.375 16.52 2.5l45.73-15.25C83 485.1 118.2 512 159.1 512c195 0 352.9-157.9 352.9-352 0-41.8-26.9-77-64.1-90.12zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48c114.8 0 208-93.25 208-208 0-26.5 21.5-48 48-48s48 21.5 48 48c0 167.6-136.4 304-304 304z" />
  </svg>
);

export default SvgSausage;
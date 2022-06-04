import * as React from "react";
import { SVGProps } from "react";

const SvgCircleQuarter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224.1 1.971c17.5-2.182 31 12.359 31 29.129v192c0 18.6-13.4 32-32 32h-192c-16.77 0-31.311-13.5-29.128-31C16.39 108.2 108.2 16.39 224.1 1.971zM53.56 207.1H207.1V53.56C131.7 71.57 71.57 131.7 53.56 207.1z" />
  </svg>
);

export default SvgCircleQuarter;
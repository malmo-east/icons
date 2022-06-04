import * as React from "react";
import { SVGProps } from "react";

const SvgCircleQuarter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224.1 1.971c17.5-2.182 31 12.359 31 29.129v192c0 18.6-13.4 32-32 32h-192c-16.77 0-31.311-13.5-29.128-31C16.39 108.2 108.2 16.39 224.1 1.971zM31.1 239.1h192c9.7 0 16-6.3 16-16v-192c0-8.55-6.4-14.08-13.1-13.25C117.5 31.36 31.36 117.5 17.85 226c-.83 6.7 4.7 13.1 13.25 13.1z" />
  </svg>
);

export default SvgCircleQuarter;

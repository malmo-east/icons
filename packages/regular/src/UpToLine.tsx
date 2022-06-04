import * as React from "react";
import { SVGProps } from "react";

const SvgUpToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M360 32H24C10.75 32 0 42.75 0 56s10.75 24 24 24h336c13.3 0 24-10.75 24-24s-10.7-24-24-24zM214.3 137.4c-6.3-6.3-14.5-9.4-22.7-9.4s-16.3 3.1-22.6 9.4L33.09 287.8C5.207 318.7 27.11 368 68.71 368h42.91v64c0 26.51 21.49 48 48 48h64c26.51 0 48-21.49 48-48v-64h43.29c41.63 0 63.52-49.37 35.58-80.23L214.3 137.4zm9.3 182.6v112h-64V320H70.26l121.4-137.4L312.1 320h-88.5z" />
  </svg>
);

export default SvgUpToLine;

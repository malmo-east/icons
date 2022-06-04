import * as React from "react";
import { SVGProps } from "react";

const SvgNeuter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368 176C368 78.8 289.2 0 192 0S16 78.8 16 176c0 94.5 74.54 171.4 168 175.6V504c0 4.4 3.6 8 8 8s8-3.578 8-8V351.6c93.5-4.2 168-81.1 168-175.6zM192 336c-88.22 0-160-71.78-160-160S103.78 16 192 16s160 71.78 160 160-71.8 160-160 160z" />
  </svg>
);

export default SvgNeuter;

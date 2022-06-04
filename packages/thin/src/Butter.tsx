import * as React from "react";
import { SVGProps } from "react";

const SvgButter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M80 112c0-17.64 14.36-32 32-32h336v208h16V80h64c17.64 0 32 14.36 32 32v176h16V112c0-26.51-21.5-48-48-48H112c-26.51 0-48 21.49-48 48v176h16V112zm552 208H8c-4.406 0-8 3.6-8 8s3.594 8 8 8h24v72c0 22.1 17.94 40 40 40h496c22.06 0 40-17.94 40-40v-72h24c4.406 0 8-3.578 8-8s-3.6-8-8-8zm-40 88c0 13.23-10.78 24-24 24H72c-13.22 0-24-10.77-24-24v-72h544v72z" />
  </svg>
);

export default SvgButter;

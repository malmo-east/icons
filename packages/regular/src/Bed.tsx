import * as React from "react";
import { SVGProps } from "react";

const SvgBed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M168 304c48.5 0 88-39.5 88-88s-39.5-88-88-88-88 39.5-88 88 39.5 88 88 88zm0-128c21.1 0 40 18 40 40s-18.9 40-40 40c-22.9 0-40-18-40-40s17.1-40 40-40zm360-48H304c-8.8 0-16 7.2-16 16v192H48V56c0-13.25-10.75-24-24-24S0 42.75 0 55.1V456c0 13.3 10.75 24 23.1 24S48 469.3 48 456v-72h544v72c0 13.3 10.7 24 24 24s24-10.7 24-24V240c0-61.9-50.1-112-112-112zm64 208H336V176h192c35.25 0 64 28.75 64 64v96z" />
  </svg>
);

export default SvgBed;
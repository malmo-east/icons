import * as React from "react";
import { SVGProps } from "react";

const SvgBookArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M424 288c-13.25 0-24 10.74-24 24v40H80c-11.38 0-22.2 2.375-32 6.688V80c0-17.67 14.33-32 32-32h320v56c0 13.3 10.7 24 24 24s24-10.7 24-24V48c0-26.51-21.5-48-48-48H80C35.82 0 0 35.82 0 80v352c0 44.2 35.82 80 80 80h344c13.25 0 24-10.75 24-24s-10.75-24-24-24h-8v-66.95c18.6-6.65 32-24.25 32-45.05v-40c0-13.3-10.7-24-24-24zm-56 176H80c-17.64 0-32-14.34-32-32s14.36-32 32-32h288v64zm264.1-273-80-80c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L558.1 184H280c-13.2 0-24 10.8-24 24s10.75 24 24 24h278.1l-39.03 39.03C514.3 275.7 512 281.8 512 288s2.344 12.28 7.031 16.97c9.375 9.375 24.56 9.375 33.94 0l80-80c9.329-9.37 9.329-24.57-.871-33.97z" />
  </svg>
);

export default SvgBookArrowRight;

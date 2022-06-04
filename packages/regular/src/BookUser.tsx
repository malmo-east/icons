import * as React from "react";
import { SVGProps } from "react";

const SvgBookUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 352V48c0-26.47-21.5-48-48-48H80C35.89 0 0 35.88 0 80v352c0 44.1 35.89 80 80 80h344c13.25 0 24-10.75 24-24s-10.75-24-24-24h-8v-66.95c18.6-6.65 32-24.25 32-45.05zm-80 112H80c-17.64 0-32-14.34-32-32s14.36-32 32-32h288v64zm32-112h-48v-16c0-44.2-35.8-80-80-80h-64c-44.2 0-80 35.8-80 80v16H80c-11.38 0-22.2 2.375-32 6.688V80c0-17.66 14.36-32 32-32h320v304zM240 224c35.35 0 64-28.66 64-64s-28.65-64-64-64-64 28.66-64 64 28.7 64 64 64z" />
  </svg>
);

export default SvgBookUser;

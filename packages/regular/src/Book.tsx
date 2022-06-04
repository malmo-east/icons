import * as React from "react";
import { SVGProps } from "react";

const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 352V48c0-26.47-21.5-48-48-48H80C35.89 0 0 35.88 0 80v352c0 44.1 35.89 80 80 80h344c13.25 0 24-10.75 24-24s-10.75-24-24-24h-8v-66.95c18.6-6.65 32-24.25 32-45.05zm-80 112H80c-17.64 0-32-14.34-32-32s14.36-32 32-32h288v64zm32-112H80c-11.38 0-22.2 2.375-32 6.688V80c0-17.66 14.36-32 32-32h320v304zM152 160h176c13.3 0 24-10.7 24-24s-10.7-24-24-24H152c-13.2 0-24 10.8-24 24s10.8 24 24 24zm0 80h176c13.3 0 24-10.7 24-24s-10.7-24-24-24H152c-13.2 0-24 10.8-24 24s10.8 24 24 24z" />
  </svg>
);

export default SvgBook;
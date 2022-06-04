import * as React from "react";
import { SVGProps } from "react";

const SvgBreadSlice = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 32C132.4 32 0 96.29 0 192c0 35.29 26.92 64 60 64h4v176c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V256h4c33.1 0 60-28.7 60-64 0-95.71-132.4-160-256-160zm196 176h-52v224H112V208H60c-5.75 0-12-6.4-12-16 0-59.63 105.8-112 208-112s208 52.38 208 112c0 9.6-6.2 16-12 16z" />
  </svg>
);

export default SvgBreadSlice;
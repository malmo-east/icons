import * as React from "react";
import { SVGProps } from "react";

const SvgPage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 512H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h181.5c17 0 33.2 6.743 45.2 18.75l74.6 74.51c12 12.04 18.7 28.24 18.7 45.24V448c0 35.3-28.7 64-64 64zM64 464h256c8.8 0 16-7.2 16-16V138.5c0-4.2-1.7-8.3-4.7-11.3l-74.5-74.51c-3-3-7.1-4.69-11.3-4.69H64c-8.84 0-16 7.16-16 16v384c0 8.8 7.16 16 16 16z" />
  </svg>
);

export default SvgPage;
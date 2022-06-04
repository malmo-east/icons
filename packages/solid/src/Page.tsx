import * as React from "react";
import { SVGProps } from "react";

const SvgPage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M0 448V64C0 28.65 28.65 0 64 0h181.5c17 0 33.2 6.743 45.2 18.75l74.6 74.51c12 12.04 18.7 28.24 18.7 45.24V448c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64z" />
  </svg>
);

export default SvgPage;

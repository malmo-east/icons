import * as React from "react";
import { SVGProps } from "react";

const SvgBars = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 88a8 8 0 0 1 8-8h432c4.4 0 8 3.58 8 8s-3.6 8-8 8H8a8 8 0 0 1-8-8zm0 160c0-4.4 3.582-8 8-8h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.418 0-8-3.6-8-8zm440 168H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h432c4.4 0 8 3.6 8 8s-3.6 8-8 8z" />
  </svg>
);

export default SvgBars;

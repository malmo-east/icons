import * as React from "react";
import { SVGProps } from "react";

const SvgBars = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 88c0-13.25 10.75-24 24-24h400c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24H24c-13.25 0-24-10.7-24-24zm0 160c0-13.3 10.75-24 24-24h400c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24zm424 184H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h400c13.3 0 24 10.7 24 24s-10.7 24-24 24z" />
  </svg>
);

export default SvgBars;

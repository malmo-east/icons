import * as React from "react";
import { SVGProps } from "react";

const SvgStairs = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 56c0 13.25-10.75 24-24 24H432v120c0 13.3-10.7 24-24 24H304v104c0 13.25-10.75 24-24 24H176v104c0 13.3-10.7 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h104V328c0-13.2 10.8-24 24-24h104V200c0-13.2 10.8-24 24-24h104V56c0-13.25 10.8-24 24-24h144c13.3 0 24 10.75 24 24z" />
  </svg>
);

export default SvgStairs;
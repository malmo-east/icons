import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 120v240c0 13.25-10.75 24-24 24s-24-10.75-24-24V177.9l-231 231c-4.72 4.8-10.86 7.1-17 7.1s-12.28-2.344-16.97-7.031c-9.375-9.375-9.375-24.56 0-33.94L238.1 144H56c-13.25 0-24-10.7-24-24s10.75-24 24-24h240c13.3 0 24 10.8 24 24z" />
  </svg>
);

export default SvgArrowUpRight;

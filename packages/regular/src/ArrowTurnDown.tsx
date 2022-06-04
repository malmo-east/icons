import * as React from "react";
import { SVGProps } from "react";

const SvgArrowTurnDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m336.1 376.1-128 128c-3.8 5.6-9.9 7.9-17 7.9s-12.28-2.344-16.97-7.031l-128-128c-9.375-9.375-9.375-24.56 0-33.94s24.56-9.375 33.94 0L168 430.1V48H24C10.75 48 0 37.25 0 24S10.75 0 24 0h168c13.25 0 24 10.75 24 24v406.1l87.03-87.03c9.375-9.375 24.56-9.375 33.94 0s9.33 24.53-.87 33.03z" />
  </svg>
);

export default SvgArrowTurnDown;
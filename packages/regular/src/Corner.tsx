import * as React from "react";
import { SVGProps } from "react";

const SvgCorner = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M424 384c-13.25 0-24-10.75-24-24V208H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h400c13.3 0 24 10.8 24 24v176c0 13.3-10.7 24-24 24z" />
  </svg>
);

export default SvgCorner;

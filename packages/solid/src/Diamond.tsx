import * as React from "react";
import { SVGProps } from "react";

const SvgDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M500.3 227.7c15.6 15.6 15.6 41 0 56.6l-216 216c-15.6 15.6-41 15.6-56.6 0l-215.98-216c-15.625-15.6-15.625-41 0-56.6L227.7 11.72c15.6-15.625 41-15.625 56.6 0l216 215.98z" />
  </svg>
);

export default SvgDiamond;

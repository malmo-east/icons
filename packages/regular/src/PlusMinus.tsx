import * as React from "react";
import { SVGProps } from "react";

const SvgPlusMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M40 200h128v128c0 13.25 10.75 24.01 24 24.01s24-10.71 24-24.01V200h128c13.25 0 24-10.74 24-23.99S357.3 152 344 152H216V24C216 10.75 205.25.01 192 .01S168 10.75 168 24v128H40c-13.25 0-24 10.76-24 24.01S26.75 200 40 200zm312 264H32c-13.25 0-24 10.75-24 24s10.75 24 24 24h320c13.25 0 24-10.76 24-24.01S365.3 464 352 464z" />
  </svg>
);

export default SvgPlusMinus;

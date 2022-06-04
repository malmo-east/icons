import * as React from "react";
import { SVGProps } from "react";

const SvgWindsock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m486.5 122.7-320-66.67a32.294 32.294 0 0 0-6.594-.684C142.7 55.34 128 69.32 128 87.35V104H48V24C48 10.74 37.25 0 24 0S0 10.74 0 24v464c0 13.3 10.75 24 24 24s24-10.75 24-24V312h80v16.65c0 18.03 14.72 32.01 31.93 32.01a32.32 32.32 0 0 0 6.594-.686l320-66.67C501.4 290.2 512 277.1 512 261.1V154c0-15.1-10.6-28.2-25.5-31.3zM128 264H48V152h80v112zm240-117v121.9l-96 20V127l96 20zm-192-40 48 10v181.9l-48 10V107zm288 141.1-48 10V157l48 10v81.1z" />
  </svg>
);

export default SvgWindsock;
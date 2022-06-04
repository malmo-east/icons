import * as React from "react";
import { SVGProps } from "react";

const SvgH = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 56v400c0 13.25-10.75 24-24 24s-24-10.75-24-24V256H48v200c0 13.3-10.75 24-24 24S0 469.3 0 456V56c0-13.25 10.75-24 24-24s24 10.75 24 24v152h288V56c0-13.25 10.8-24 24-24s24 10.75 24 24z" />
  </svg>
);

export default SvgH;

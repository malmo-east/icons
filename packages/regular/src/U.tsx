import * as React from "react";
import { SVGProps } from "react";

const SvgU = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 480C86.1 480 0 395.24 0 291.1V56c0-13.25 10.75-24 24-24s24 10.75 24 24v235.1C48 368.8 112.6 432 192 432s144-63.22 144-140.9V56c0-13.25 10.8-24 24-24s24 10.75 24 24v235.1C384 395.3 297.9 480 192 480z" />
  </svg>
);

export default SvgU;

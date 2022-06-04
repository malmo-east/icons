import * as React from "react";
import { SVGProps } from "react";

const SvgN = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M360 480a24.052 24.052 0 0 1-18.38-8.562L48 121.9V456c0 13.3-10.75 24-24 24S0 469.3 0 456V56c0-10.09 6.312-19.09 15.78-22.55 9.438-3.469 20.06-.625 26.59 7.109L336 390.1V56c0-13.25 10.8-24 24-24s24 10.75 24 24v400c0 10.09-6.312 19.09-15.78 22.55-2.72.95-5.42 1.45-8.22 1.45z" />
  </svg>
);

export default SvgN;

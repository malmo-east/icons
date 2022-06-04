import * as React from "react";
import { SVGProps } from "react";

const SvgGreaterThan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M384 256c0 9.25-5.312 17.68-13.69 21.65l-336 160C31 439.3 27.47 440 24.03 440c-8.969 0-17.59-5.031-21.69-13.69-5.719-11.97-.625-26.28 11.34-31.97L304.2 256 13.7 117.7c-11.97-5.688-17.06-20-11.34-31.97 5.688-11.97 20-17.09 31.97-11.34l336 160C378.7 238.3 384 246.8 384 256z" />
  </svg>
);

export default SvgGreaterThan;
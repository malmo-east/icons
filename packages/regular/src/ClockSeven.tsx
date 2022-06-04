import * as React from "react";
import { SVGProps } from "react";

const SvgClockSeven = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M232 120c0-13.3 10.7-24 24-24s24 10.7 24 24v136c0 4.7-1.4 9.4-4.9 13.3l-64 96c-6.5 11-21.4 14-32.4 5.8-11-6.5-14-21.4-6.7-32.4l60-90V120zM256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256z" />
  </svg>
);

export default SvgClockSeven;

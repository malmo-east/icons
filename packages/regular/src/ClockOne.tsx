import * as React from "react";
import { SVGProps } from "react";

const SvgClockOne = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m280 176.7 20-30c7.4-11 22.3-14 33.3-6.7 11 7.4 14 22.3 5.8 33.3l-64 96c-5 8.8-15.9 12.7-26.1 8.8-10.1-2.2-17.9-11.5-17.9-22.1V120c0-13.3 11.6-24 24-24 14.2 0 24.9 10.7 24.9 24v56.7zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
  </svg>
);

export default SvgClockOne;
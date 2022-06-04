import * as React from "react";
import { SVGProps } from "react";

const SvgClockTwo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m280 211.2 58.7-39.2c11-7.3 25.9-4.3 32.4 6.7 8.2 11 5.2 25.9-5.8 32.4l-96 64c-7.4 5.8-16.8 6.2-24.6 2.1-7.8-5.1-13.6-12.3-13.6-22.1v-136c0-12.4 11.6-24 24-24 14.2 0 24.9 11.6 24.9 24v92.1zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
  </svg>
);

export default SvgClockTwo;

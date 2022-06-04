import * as React from "react";
import { SVGProps } from "react";

const SvgSigma = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M335.1 136V80H83.59l165 158.7c4.71 4.5 6.51 10.8 6.51 17.3s-2.656 12.78-7.375 17.31L83.59 432h252.4v-56c0-13.25 10.75-24 24-24 13.21 0 24.01 10.8 24.01 24v80c0 13.25-10.75 24-24 24H23.99c-9.782 0-18.59-5.938-22.25-15.03S.302 445.5 7.365 438.69L197.4 256 7.364 73.31C.301 66.5-1.917 56.13 1.739 47.03S14.21 32 23.99 32h336C373.2 32 384 42.75 384 56v80c0 13.3-10.8 24-24.9 24-12.4 0-24-10.7-24-24z" />
  </svg>
);

export default SvgSigma;
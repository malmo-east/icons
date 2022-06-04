import * as React from "react";
import { SVGProps } from "react";

const SvgCalculatorSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M168.1 343c-9.375-9.375-24.56-9.375-33.94 0L112 366.1l-23.03-23.03c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L78.06 400l-23.03 23.03c-9.375 9.375-9.375 24.56 0 33.94C59.72 461.7 65.84 464 72 464s12.28-2.344 16.97-7.031L112 433.9l23.03 23.03C139.7 461.7 145.8 464 152 464s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L145.9 400l23.03-23.03c9.37-9.37 9.37-24.57-.83-33.97zM64 134.9h96c13.25 0 24-10.75 24-24s-10.75-24-24-24H64c-13.25 0-24 10.75-24 24s10.75 24 24 24zm280 1.2h32v32c0 13.25 10.75 23.92 24 23.92s24-10.67 24-23.92v-32h32c13.25 0 24-10.83 24-24.08S469.25 88.1 456 88.1h-32v-32c0-13.25-10.75-24.08-24-24.08s-24 10.83-24 24.08v32h-32c-13.25 0-24 10.67-24 23.92s10.8 24.08 24 24.08zM488 232H280V24c0-13.25-10.7-24-24-24s-24 10.75-24 24v208H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h208v208c0 13.3 10.8 24 24 24s24-10.75 24-24V280h208c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-40 184h-96.06C338.7 416 328 426.8 328 440s10.8 24 24 24h96c13.25 0 24-10.75 24-24s-10.7-24-24-24zm0-80h-96c-13.25 0-24 10.75-24 24s10.7 24 23.1 24h96.06c14.14 0 24.84-10.7 24.84-24s-10.7-24-24-24z" />
  </svg>
);

export default SvgCalculatorSimple;
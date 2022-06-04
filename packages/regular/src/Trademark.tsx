import * as React from "react";
import { SVGProps } from "react";

const SvgTrademark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M232 96H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h80.64c-.14 1.1-.64 2.1-.64 3.2V392c0 13.25 10.75 24.01 24 24.01s24-10.71 24-24.01V147.2c0-1.1-.5-2.1-.6-3.2H232c13.3 0 24-10.7 24-24s-10.7-24-24-24zm391.6 1.22c-9.781-3.125-20.59.156-26.81 8.438L464 283.8 331.2 105.6c-6.188-8.281-16.91-11.56-26.81-8.438C294.6 100.5 288 109.7 288 120v272c0 13.3 10.8 24 24 24s24-10.75 24-24V192.4l108.8 145.1c9.062 12.12 29.44 12.12 38.5 0L592 192.4V392c0 13.25 10.75 24 24 24s24-10.7 24-24V120c0-10.3-6.6-19.5-16.4-22.78z" />
  </svg>
);

export default SvgTrademark;

import * as React from "react";
import { SVGProps } from "react";

const SvgSignal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M160 288c-13.2 0-24 10.8-24 24v176c0 13.3 10.8 24 24 24s24-10.75 24-24V312c0-13.2-10.7-24-24-24zM32 384c-13.25 0-24 10.8-24 24v80c0 13.25 10.75 24 23.1 24S56 501.3 56 488v-80c0-13.2-10.75-24-24-24zm256-192c-13.2 0-24 10.8-24 24v272c0 13.3 10.8 24 24 24s24-10.75 24-24V216c0-13.2-10.7-24-24-24zm128-96c-13.25 0-24 10.75-24 24v368c0 13.25 10.75 24 24 24s24-10.75 24-24V120c0-13.2-10.7-24-24-24zM544 0c-13.25 0-24 10.75-24 24v464c0 13.25 10.75 24 24 24s24-10.75 24-24V24c0-13.25-10.7-24-24-24z" />
  </svg>
);

export default SvgSignal;
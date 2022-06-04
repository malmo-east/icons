import * as React from "react";
import { SVGProps } from "react";

const SvgExpandWide = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M136 400H48v-88c0-13.3-10.75-24-24-24S0 298.7 0 312v112c0 13.3 10.75 24 24 24h112c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0-336H24C10.75 64 0 74.75 0 88v112c0 13.3 10.75 24 24 24 13.26 0 24-10.7 24-24v-88h88c13.3 0 24-10.7 24-24s-10.7-24-24-24zm352 0H376c-13.3 0-24 10.75-24 24 0 13.26 10.75 24 24 24h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-13.25-10.7-24-24-24zm0 224c-13.26 0-24 10.75-24 24v88h-88c-13.26 0-24 10.75-24 24s10.7 24 24 24h112c13.25 0 24-10.75 24-24V312c0-13.3-10.7-24-24-24z" />
  </svg>
);

export default SvgExpandWide;
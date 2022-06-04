import * as React from "react";
import { SVGProps } from "react";

const SvgPlug = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M96 0c13.3 0 24 10.75 24 24v88H72V24C72 10.75 82.75 0 96 0zm192 0c13.3 0 24 10.75 24 24v88h-48V24c0-13.25 10.7-24 24-24zm72 144c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v64c0 80.2-59.9 146.6-136 158.2V512h-48v-97.8C91.02 402.6 32 336.2 32 256v-64h-8c-13.25 0-24-10.7-24-24s10.75-24 24-24h336zM192 368c61.9 0 112-50.1 112-112v-64H80v64c0 61.9 50.1 112 112 112z" />
  </svg>
);

export default SvgPlug;

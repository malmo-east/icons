import * as React from "react";
import { SVGProps } from "react";

const SvgCompressWide = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M376 224h112c13.3 0 24-10.7 24-24 0-13.26-10.75-24-24-24h-88V88c0-13.26-10.7-24-24-24s-24 10.74-24 24v112c0 13.3 10.7 24 24 24zm-240 64H24c-13.25 0-24 10.7-24 24 0 13.25 10.75 24 24 24h88v88c0 13.3 10.7 24 24 24s24-10.7 24-24V312c0-13.3-10.7-24-24-24zm352 0H376c-13.3 0-24 10.7-24 24v112c0 13.25 10.75 24 24 24s24-10.75 24-24v-88h88c13.25 0 24-10.75 24-24 0-13.3-10.7-24-24-24zM136 64c-13.3 0-24 10.74-24 24v88H24c-13.25 0-24 10.7-24 24s10.75 24 24 24h112c13.3 0 24-10.7 24-24V88c0-13.26-10.7-24-24-24z" />
  </svg>
);

export default SvgCompressWide;
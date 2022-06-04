import * as React from "react";
import { SVGProps } from "react";

const SvgTextSize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M320 248v48c0 13.3 10.8 24 24 24s24-10.75 24-24v-24h88v160h-32c-13.25 0-24 10.75-24 24s10.8 24 24 24h112c13.25 0 24-10.75 24-24s-10.75-24-24-24h-32V272h88v24c0 13.25 10.75 24 24 24s24-10.7 24-24v-48c0-13.2-10.7-24-24-24H344c-13.2 0-24 10.8-24 24zM0 56v80c0 13.3 10.75 24 24 24s24-10.7 24-24V80h120v352h-48c-13.2 0-24 10.8-24 24s10.8 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48V80h120v56c0 13.3 10.8 24 24 24s24-10.7 24-24V56c0-13.25-10.7-24-24-24H24C10.75 32 0 42.75 0 56z" />
  </svg>
);

export default SvgTextSize;
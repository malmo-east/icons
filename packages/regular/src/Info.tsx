import * as React from "react";
import { SVGProps } from "react";

const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M168 464h-48V200c0-13.25-10.75-24-24-24H56c-13.25 0-24 10.8-24 24s10.75 24 24 24h16v240H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h144c13.25 0 24-10.75 24-24s-10.7-24-24-24zM96 128c26.51 0 48-21.49 48-48s-21.5-47.99-48-47.99-48 21.49-48 48S69.49 128 96 128z" />
  </svg>
);

export default SvgInfo;
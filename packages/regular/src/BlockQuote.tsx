import * as React from "react";
import { SVGProps } from "react";

const SvgBlockQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M424 72c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24H24c-13.25 0-24-10.7-24-24 0-13.25 10.75-24 24-24h400zm0 160c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24h272zM128 416c0-13.3 10.7-24 24-24h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24zM0 248c0-13.3 10.75-24 24-24s24 10.7 24 24v176c0 13.3-10.75 24-24 24S0 437.3 0 424V248z" />
  </svg>
);

export default SvgBlockQuote;

import * as React from "react";
import { SVGProps } from "react";

const SvgTombstoneBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M424 464h-7.984l-.017-272C415.99 86.9 329.99 0 224 .9 118 .91 32 86.91 32.9 192.9L32.02 464H24c-13.25 0-24 10.7-24 24s10.75 24 24 24h400c13.25 0 24-10.75 24-24 0-13.3-10.7-24-24-24zM79.99 192c-.008-79.37 64.61-143.1 143.1-144s144 64.61 144 143.1L368 464H80l-.01-272z" />
  </svg>
);

export default SvgTombstoneBlank;
import * as React from "react";
import { SVGProps } from "react";

const SvgTombstone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m295.1 159.1-47.98.007-.02-40.007c0-12.4-9.9-24-24-23.1-12.4 0-24 10.7-24 24l.026 39.1-48.026.9c-13.26.002-23.99 10.74-23.98 23.1 0 13.26 10.73 24 23.99 24l48.02-.005L199.1 328c0 13.3 11.6 24 24 24 13.25-.002 23.99-10.75 23.99-24l.007-119.1 47.98-.007c13.25 0 24.01-10.74 24.01-23.1C319.1 170.7 309.2 159.1 295.1 159.1zM424 464h-7.984l-.017-272C415.1 86 329.1-.01 223.1 0 117.1.01 31.1 86.01 32 192l.02 272H24c-13.25 0-24 10.7-24 24s10.75 24 24 24h400c13.25 0 24-10.75 24-24 0-13.3-10.7-24-24-24zm-343.98 0-.03-272c-.008-79.37 64.61-143.1 143.1-144s144 64.61 144 143.1L368 464H80.02z" />
  </svg>
);

export default SvgTombstone;

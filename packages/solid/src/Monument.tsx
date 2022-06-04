import * as React from "react";
import { SVGProps } from "react";

const SvgMonument = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M180.7 4.686c6.2-6.248 16.4-6.248 22.6 0l80 80.004c2.5 2.51 4.1 5.79 4.6 9.33L328.1 416H55.88L96.12 94.02a15.95 15.95 0 0 1 4.58-9.33l80-80.004zM152 272c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80zm200 176c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h320z" />
  </svg>
);

export default SvgMonument;

import * as React from "react";
import { SVGProps } from "react";

const SvgTurnDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M317.9 367.3c-4.094-9.406-13.19-15.25-23.69-15.25h-94.25V71.1C199.1 32.31 167.7 0 127.1 0H7.1C3.594 0 0 3.594 0 7.1s3.594 7.1 7.1 7.1h119.1c30.87 0 55.1 25.12 55.1 55.1v280H89.75c-10.5 0-19.59 5.844-23.69 15.25-3.937 8.1-2.187 19.12 4.562 26.41l102.3 110.1C177.8 509 184.7 512 191.1 512c7.281 0 14.21-2.1 19.12-8.25l102.2-110.1c7.68-7.25 9.48-17.35 5.48-26.35zm-16.3 15.5L199.4 492.9c-3.75 3.1-11.09 3.1-14.78 0L82.42 382.8c-3.52-3.7-2.36-7.6-1.7-9.1 1.531-3.562 4.906-5.656 9.031-5.656h204.5c4.125 0 7.5 2.094 9.031 5.656.618 1.5 1.818 5.4-1.682 9.1z" />
  </svg>
);

export default SvgTurnDown;
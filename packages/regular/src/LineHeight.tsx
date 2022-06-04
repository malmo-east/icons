import * as React from "react";
import { SVGProps } from "react";

const SvgLineHeight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M185.8 119.9c8.9 9.9 8.1 24.2-1.7 33.9-9.9 8.9-25.1 8.1-33.9-1.7L120 118.5v275l30.2-33.6c8.8-9.8 24-10.6 33.9-1.7 9.8 8.8 10.6 24 1.7 33.9l-72 80c-4.5 5-11 7.9-17.8 7.9-6.8 0-13.29-2.9-17.84-7.9l-71.999-80c-8.867-9.9-8.068-25.1 1.784-33.9 9.855-8.9 25.025-8.1 33.895 1.7L72 393.5v-275l-30.16 33.6c-8.87 9.8-24.04 10.6-33.895 1.7-9.852-9.7-10.651-24-1.784-33.9L78.16 39.94A24.027 24.027 0 0 1 96 32c6.8 0 13.3 2.89 17.8 7.94l72 79.96zM552 72c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24H248c-13.3 0-24-10.7-24-24 0-13.25 10.7-24 24-24h304zm0 160c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24s10.7-24 24-24h304zM224 416c0-13.3 10.7-24 24-24h304c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24z" />
  </svg>
);

export default SvgLineHeight;

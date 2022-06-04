import * as React from "react";
import { SVGProps } from "react";

const SvgRhombus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 0c11.7 0 22.9 5.14 30.4 14.06l184 216.04c12.8 14.9 12.8 36 0 51.8l-184 216c-7.6 9-18.7 14.1-30.4 14.1s-22.8-5.1-30.4-14.1L9.55 281.9c-12.733-15.8-12.733-36.9 0-51.8L193.6 14.06C201.2 5.14 212.3 0 224 0zm18.3 24.44C237.7 19.08 231 16 224 16c-7.9 0-13.7 3.08-18.3 8.44L21.73 240.4c-7.64 9-7.64 22.2 0 31.2l183.97 216c4.6 5.3 10.4 8.4 18.3 8.4 7 0 13.7-3.1 18.3-8.4l184-216c7.6-9 7.6-22.2 0-31.2l-184-215.96z" />
  </svg>
);

export default SvgRhombus;

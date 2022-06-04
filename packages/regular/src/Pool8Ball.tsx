import * as React from "react";
import { SVGProps } from "react";

const SvgPool8Ball = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 192c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.78 24-24-10.8-24-24-24zm0-32c8.828 0 16-7.188 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm0-96c-70.7 0-128 57.3-128 128 0 70.69 57.31 128 128 128s128-57.31 128-128c0-70.7-57.3-128-128-128zm0 208c-30.88 0-56-25.12-56-56 0-16.66 7.459-31.48 19.04-41.74C212.3 165.1 208 155.5 208 144c0-26.5 21.5-48 48-48s48 21.53 48 48c0 11.53-4.25 21.97-11.04 30.26C304.5 184.5 312 199.3 312 216c0 30.9-25.1 56-56 56zm0-272C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgPool8Ball;
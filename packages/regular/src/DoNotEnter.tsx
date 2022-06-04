import * as React from "react";
import { SVGProps } from "react";

const SvgDoNotEnter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M384 208c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32v-32c0-17.7 14.3-32 32-32h256zm128 48c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" />
  </svg>
);

export default SvgDoNotEnter;
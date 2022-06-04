import * as React from "react";
import { SVGProps } from "react";

const SvgCircleChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M272.1 159c-3.8-4.7-9.9-7-16.1-7s-12.3 2.3-17 7L127 271c-9.375 9.375-9.375 24.56 0 33.94s24.56 9.375 33.94 0L256 209.9l95.03 95.03c9.375 9.375 24.56 9.375 33.94 0s9.375-24.56 0-33.94L272.1 159zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgCircleChevronUp;
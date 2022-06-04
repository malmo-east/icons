import * as React from "react";
import { SVGProps } from "react";

const SvgGaugeSimpleLow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M213.7 315.4 146 161.7c-5.3-12.2.2-26.3 12.3-31.7 12.2-5.3 26.3.2 30.8 12.3L257.6 296c30.2.9 54.4 25.6 54.4 56 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-14.9 5.1-26.8 13.7-36.6zM256 512C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm208-256c0-114.9-93.1-208-208-208S48 141.1 48 256s93.1 208 208 208 208-93.1 208-208z" />
  </svg>
);

export default SvgGaugeSimpleLow;

import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRightFromArc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 464c13.3 0 24 10.7 24 24s-10.7 24-24 24C114.6 512 0 397.4 0 256S114.6 0 256 0c13.3 0 24 10.75 24 24s-10.7 24-24 24C141.1 48 48 141.1 48 256s93.1 208 208 208zm248.3-225.6c4.9 3.7 7.7 10.9 7.7 17.6 0 6.7-2.8 13-7.7 17.6l-112 104c-9.7 9-24.9 8.4-33.9-1.3-9-9.7-9.3-24.9 1.3-33.9l67.2-63.3H184c-13.3 0-24-9.8-24-24 0-12.4 10.7-24 24-24h242.9l-67.2-61.5c-10.6-9-10.3-24.2-1.3-33.9 9-10.6 24.2-10.3 33.9-1.3l112 104z" />
  </svg>
);

export default SvgArrowRightFromArc;
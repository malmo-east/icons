import * as React from "react";
import { SVGProps } from "react";

const SvgCircleZ = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm72-128h-98.2l117.9-170.3a23.94 23.94 0 0 0 1.531-24.8C345.1 132.1 336.9 128 328 128H184c-13.2 0-24 10.8-24 24s10.8 24 24 24h98.19l-117.9 170.3a23.94 23.94 0 0 0-1.531 24.8C166.9 379 175.1 384 184 384h144c13.25 0 24-10.75 24-24s-10.7-24-24-24z" />
  </svg>
);

export default SvgCircleZ;

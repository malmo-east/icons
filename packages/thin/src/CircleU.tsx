import * as React from "react";
import { SVGProps } from "react";

const SvgCircleU = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M360 144c-4.4 0-8 3.6-8 8v141.8c0 49.7-43.1 90.2-96 90.2s-96-40.45-96-90.19V152c0-4.4-3.6-8-8-8s-8 3.6-8 8v141.8c0 58.6 50.3 106.2 112 106.2s112-47.64 112-106.2V152c0-4.4-3.6-8-8-8zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleU;

import * as React from "react";
import { SVGProps } from "react";

const SvgCircleO = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 128c-70.6 0-128 57.4-128 128s57.42 128 128 128 128-57.42 128-128-57.4-128-128-128zm0 240c-61.75 0-112-50.25-112-112s50.3-112 112-112 112 50.25 112 112-50.2 112-112 112zm0-368C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleO;

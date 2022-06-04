import * as React from "react";
import { SVGProps } from "react";

const SvgCircleD = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm-1.6-336H184c-13.2 0-24 10.8-24 24v208c0 13.3 10.8 24 24 24h70.41C325.9 384 384 326.6 384 256s-58.1-128-129.6-128zm0 208H208V176h46.41c44.99 0 81.59 35.9 81.59 80s-36.6 80-81.6 80z" />
  </svg>
);

export default SvgCircleD;

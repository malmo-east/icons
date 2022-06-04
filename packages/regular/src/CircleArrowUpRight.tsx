import * as React from "react";
import { SVGProps } from "react";

const SvgCircleArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M344 144H188.7c-13.25 0-24 10.75-24 24s10.8 24 24 24h97.36l-135 135c-9.375 9.375-9.375 24.56 0 33.94C155.7 365.7 161.9 368 168 368s12.28-2.344 16.97-7.031L320 225.9v97.34c0 13.25 10.75 24 24 24s24-10.75 24-24V168c0-13.2-10.7-24-24-24zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgCircleArrowUpRight;

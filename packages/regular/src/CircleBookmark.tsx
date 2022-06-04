import * as React from "react";
import { SVGProps } from "react";

const SvgCircleBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M309.3 144H202.7c-14.8 0-26.7 11.9-26.7 26.7V336c0 13.41 15.52 20.88 25.1 12.49L256 304l54 44.46c10.5 8.34 26 .94 26-13.36V170.7c0-14.8-11.9-26.7-26.7-26.7zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z" />
  </svg>
);

export default SvgCircleBookmark;
import * as React from "react";
import { SVGProps } from "react";

const SvgCircleP = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm24-336h-96c-13.2 0-24 10.8-24 24v208c0 13.3 10.8 24 24 24s24-10.75 24-24v-56h72c48.53 0 88-39.47 88-88s-39.5-88-88-88zm0 128h-72v-80h72c22.1 0 40 17.9 40 40s-17.9 40-40 40z" />
  </svg>
);

export default SvgCircleP;

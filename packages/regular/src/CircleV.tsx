import * as React from "react";
import { SVGProps } from "react";

const SvgCircleV = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm114.7-317.5c-11.86-5.891-26.27-1.125-32.2 10.73L256 322.3l-82.5-165c-6-11.9-20.3-16.7-32.2-10.8-11.9 6-16.7 20.4-10.8 32.2l104 208c4.1 8.2 12.4 13.3 21.5 13.3s17.41-5.141 21.47-13.27l104-208c5.93-11.83 1.13-26.23-10.77-32.23z" />
  </svg>
);

export default SvgCircleV;

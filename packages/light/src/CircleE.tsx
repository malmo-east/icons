import * as React from "react";
import { SVGProps } from "react";

const SvgCircleE = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm80-320c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h160c8.844 0 16-7.156 16-16s-7.2-16-16-16H192v-80h96c8.844 0 16-7.156 16-16s-7.2-16-16-16h-96v-80h144z" />
  </svg>
);

export default SvgCircleE;

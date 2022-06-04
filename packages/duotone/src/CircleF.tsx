import * as React from "react";
import { SVGProps } from "react";

const SvgCircleF = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-f_svg__fa-primary"
      d="M328 128H184c-13.2 0-24 10.8-24 24v208c0 13.3 10.8 24 24 24s24-10.75 24-24v-72h88c13.3 0 24-10.7 24-24s-10.7-24-24-24h-88v-64h120c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm72 176H208v64h88c13.3 0 24 10.8 24 24s-10.7 24-24 24h-88v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.2 10.8-24 24-24h144c13.3 0 24 10.8 24 24s-10.7 24-24 24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleF;

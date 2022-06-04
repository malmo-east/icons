import * as React from "react";
import { SVGProps } from "react";

const SvgCircleP = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-p_svg__fa-primary"
      d="M280 128h-96c-13.2 0-24 10.8-24 24v208c0 13.3 10.8 24 24 24s24-10.75 24-24v-56h72c48.53 0 88-39.47 88-88s-39.5-88-88-88zm0 128h-72v-80h72c22.1 0 40 17.9 40 40s-17.9 40-40 40z"
    />
    <path
      d="M280 176h-72v80h72c22.1 0 40-17.9 40-40s-17.9-40-40-40zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm24 304h-72v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.2 10.8-24 24-24h96c48.53 0 88 39.47 88 88s-39.5 88-88 88z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleP;

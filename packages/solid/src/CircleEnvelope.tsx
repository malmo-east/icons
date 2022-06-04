import * as React from "react";
import { SVGProps } from "react";

const SvgCircleEnvelope = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm128 320c0 17.67-14.33 32-32 32H160c-17.67 0-32-14.33-32-32v-82l122.1 48.82c1 .78 3 1.18 5.9 1.18s4.031-.375 5.938-1.141L384 238v82zm0-116.4-128 51.2-128-51.2V192c0-17.67 14.33-32 32-32h192c17.67 0 32 14.33 32 32v11.6z" />
  </svg>
);

export default SvgCircleEnvelope;

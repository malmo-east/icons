import * as React from "react";
import { SVGProps } from "react";

const SvgRubleSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M232 32c75.1 0 136 60.89 136 136 0 75.1-60.9 136-136 136H80v64h232c4.4 0 8 3.6 8 8s-3.6 8-8 8H80v80c0 4.4-3.58 8-8 8s-8-3.6-8-8v-80H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h56v-64H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h56V64.69C64 46.63 78.63 32 96.69 32H232zm120 136c0-66.3-53.7-120-120-120H96.69C87.47 48 80 55.47 80 64.69V288h152c66.3 0 120-53.7 120-120z" />
  </svg>
);

export default SvgRubleSign;

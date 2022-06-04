import * as React from "react";
import { SVGProps } from "react";

const SvgTheta = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 16.01C94.8 16.01 16 123.5 16 256s78.8 240 176 240 176-107.5 176-240S289.2 16.01 192 16.01zM192 64c63.96 0 118.7 74.78 126.8 168H65.17C73.34 138.8 128 64 192 64zm0 384c-63.96 0-118.7-74.78-126.8-168h253.7c-8.2 93.2-63.8 168-126.9 168z" />
  </svg>
);

export default SvgTheta;

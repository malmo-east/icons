import * as React from "react";
import { SVGProps } from "react";

const SvgBan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM80.73 92.04C40.58 134.9 16 192.6 16 256c0 132.5 107.5 240 240 240 63.4 0 121.1-24.6 163.1-64.7L80.73 92.04zM496 256c0-132.5-107.5-240-240-240-63.4 0-121.1 24.58-163.96 64.73L431.3 419.1c40.1-42 64.7-99.7 64.7-164v.9z" />
  </svg>
);

export default SvgBan;

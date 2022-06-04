import * as React from "react";
import { SVGProps } from "react";

const SvgCircleQuarters = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 16c63.4 0 121.1 24.58 163.1 64.73L256 244.7 92.05 80.73C134.9 40.58 192.6 16 256 16zM16 256c0-63.4 24.58-121.1 64.73-163.1L244.7 256 81.6 419.1C40.58 377.1 16 319.4 16 256zm240 240c-63.4 0-121.1-24.58-163.1-64.73L256 268.17l163.1 163.1C377.1 471.4 319.4 496 256 496zm175.3-76.9L267.3 256 430.4 92.9c41 42 65.6 99.7 65.6 163.1s-24.6 121.1-64.7 163.1z" />
  </svg>
);

export default SvgCircleQuarters;

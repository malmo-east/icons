import * as React from "react";
import { SVGProps } from "react";

const SvgFaceGrimace = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M344 288c30.9 0 56 25.1 56 56s-25.1 56-56 56H168c-30.9 0-56-25.1-56-56s25.1-56 56-56h176zm-176 16c-22.1 0-40 17.9-40 40s17.9 40 40 40h8v-80h-8zm24 80h56v-80h-56v80zm128-80h-56v80h56v-80zm16 80h8c22.1 0 40-17.9 40-40s-17.9-40-40-40h-8v80zM192.4 208c0 8.8-7.2 16-16 16-8.9 0-16-7.2-16-16s7.1-16 16-16c8.8 0 16 7.2 16 16zm128 0c0-8.8 7.1-16 16-16 8.8 0 16 7.2 16 16s-7.2 16-16 16c-8.9 0-16-7.2-16-16zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zM256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16z" />
  </svg>
);

export default SvgFaceGrimace;
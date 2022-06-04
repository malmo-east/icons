import * as React from "react";
import { SVGProps } from "react";

const SvgNeuter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368 176C368 78.8 289.2 0 192 0S16 78.8 16 176c0 91.8 70.31 167.1 160 175.2V496c0 8.844 7.156 16 16 16s16-7.156 16-16V351.2c89.7-8.1 160-83.4 160-175.2zM192 320c-79.4 0-144-64.6-144-144S112.6 32 192 32s144 64.6 144 144-64.6 144-144 144z" />
  </svg>
);

export default SvgNeuter;

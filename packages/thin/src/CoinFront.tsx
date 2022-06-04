import * as React from "react";
import { SVGProps } from "react";

const SvgCoinFront = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M264 344c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8s8 3.6 8 8v176zM64 256c0-106.9 85.1-192 192-192 106 0 192 85.1 192 192 0 106-86 192-192 192-106.9 0-192-86-192-192zm192 176c97.2 0 176-78.8 176-176S353.2 80 256 80 80 158.8 80 256s78.8 176 176 176zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 240c132.5 0 240-107.5 240-240S388.5 16 256 16 16 123.5 16 256s107.5 240 240 240z" />
  </svg>
);

export default SvgCoinFront;

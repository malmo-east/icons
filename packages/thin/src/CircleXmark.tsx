import * as React from "react";
import { SVGProps } from "react";

const SvgCircleXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M178.3 178.3c3.2-3.1 8.2-3.1 11.4 0l66.3 66.4 66.3-66.4c3.2-3.1 8.2-3.1 11.4 0 3.1 3.2 3.1 8.2 0 11.4L267.3 256l66.4 66.3c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0L256 267.3l-66.3 66.4a8.15 8.15 0 0 1-11.4 0 8.15 8.15 0 0 1 0-11.4l66.4-66.3-66.4-66.3a8.15 8.15 0 0 1 0-11.4zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16z" />
  </svg>
);

export default SvgCircleXmark;

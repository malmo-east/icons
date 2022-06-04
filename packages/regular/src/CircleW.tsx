import * as React from "react";
import { SVGProps } from "react";

const SvgCircleW = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm127.1-318.9c-12.66-3.828-26.11 3.203-30 15.88L313.5 289.4l-34.36-127.6C276.4 151.3 266.9 144 256 144s-20.4 7.3-23.2 17.8l-34.3 127.6-39.6-128.5c-3.906-12.67-17.34-19.73-30-15.88-12.67 3.891-19.78 17.33-15.88 30l64 208C180.2 393.3 189.7 399.1 200.4 400c10.7-.188 19.97-7.438 22.75-17.77L256 260.3l32.83 121.9c2.77 10.4 12.07 17.6 22.77 17.8h.4c10.52 0 19.84-6.859 22.94-16.94l64-208c3.86-12.66-3.24-26.96-15.84-29.96z" />
  </svg>
);

export default SvgCircleW;

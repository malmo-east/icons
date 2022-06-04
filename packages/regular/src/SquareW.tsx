import * as React from "react";
import { SVGProps } from "react";

const SvgSquareW = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm16 384c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v320zm-48.9-286.9c-12.66-3.828-26.11 3.203-30 15.88L281.5 273.4l-34.36-127.6C244.4 135.3 234.9 128 224 128s-20.4 7.3-23.2 17.8l-34.3 127.6-39.6-128.5c-3.906-12.67-17.34-19.73-30-15.88-12.67 3.891-19.78 17.33-15.88 30l64 208C148.2 377.3 157.7 383.1 168.4 384c10.7-.188 19.97-7.438 22.75-17.77L224 244.3l32.83 121.9c2.77 10.4 12.07 17.6 22.77 17.8h.4c10.52 0 19.84-6.859 22.94-16.94l64-208c3.86-12.66-3.24-26.96-15.84-29.96z" />
  </svg>
);

export default SvgSquareW;

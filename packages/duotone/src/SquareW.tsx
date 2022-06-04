import * as React from "react";
import { SVGProps } from "react";

const SvgSquareW = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-w_svg__fa-primary"
      d="M351.1 129.1c-12.66-3.828-26.11 3.203-30 15.88L281.5 273.4l-34.36-127.6C244.4 135.3 234.9 128 224 128s-20.4 7.3-23.2 17.8l-34.3 127.6-39.6-128.5c-3.906-12.67-17.34-19.73-30-15.88-12.67 3.891-19.78 17.33-15.88 30l64 208C148.2 377.3 157.7 383.1 168.4 384c10.7-.188 19.97-7.438 22.75-17.77L224 244.3l32.83 121.9c2.77 10.4 12.07 17.6 22.77 17.8h.4c10.52 0 19.84-6.859 22.94-16.94l64-208c3.86-12.66-3.24-26.96-15.84-29.96z"
    />
    <path
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-17.1 127.1-64 208c-3.1 10-12.4 16.9-22.9 16.9h-.422c-10.7-.188-19.97-7.438-22.75-17.77L224 244.3l-32.83 121.9c-2.77 10.4-12.07 17.6-22.77 17.8-10.73-.016-20.22-6.734-23.36-16.94l-64-208c-3.906-12.67 3.203-26.11 15.88-30 12.66-3.859 26.09 3.203 30 15.88L166.5 273.4l34.36-127.6C203.6 135.3 213.1 128 224 128s20.36 7.281 23.17 17.77l34.36 127.6 39.53-128.5c3.891-12.67 17.34-19.7 30-15.88 12.64 3.11 19.74 17.41 15.84 30.11z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareW;

import * as React from "react";
import { SVGProps } from "react";

const SvgSquareU = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-u_svg__fa-primary"
      d="M312 128c-13.2 0-24 10.8-24 24v122.9c0 33.7-28.7 61.1-64 61.1s-64-27.4-64-61.1V152c0-13.2-10.7-24-24-24s-24 10.8-24 24v122.9c0 60.2 50.3 109.1 112 109.1s112-48.94 112-109.1V152c0-13.2-10.7-24-24-24z"
    />
    <path
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-48 242.9c0 60.2-50.2 109.1-112 109.1s-112-48.94-112-109.1V152c0-13.2 10.8-24 24-24s24 10.8 24 24v122.9c0 33.7 28.7 61.1 64 61.1s64-27.41 64-61.09V152c0-13.2 10.8-24 24-24s24 10.75 24 24v122.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareU;

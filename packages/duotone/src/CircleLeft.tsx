import * as React from "react";
import { SVGProps } from "react";

const SvgCircleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-left_svg__fa-primary"
      d="M246.1 129.2c6 2.5 9.9 8.3 9.9 14.8v64h96c17.67 0 32 14.33 32 32v32c0 17.67-14.33 32-32 32h-96v64c0 6.469-3.891 12.31-9.875 14.78a15.988 15.988 0 0 1-17.44-3.469l-112-112c-6.248-6.248-6.248-16.38 0-22.62l112-112C233.3 128.1 240.1 126.7 246.1 129.2z"
    />
    <path
      d="M0 256c0 141.4 114.6 256 256 256s256-114.6 256-256S397.4 0 256 0 0 114.6 0 256zm246.1-126.8c6 2.5 9.9 8.3 9.9 14.8v64h96c17.67 0 32 14.33 32 32v32c0 17.67-14.33 32-32 32h-96v64c0 6.469-3.891 12.31-9.875 14.78a15.988 15.988 0 0 1-17.44-3.469l-112-112c-6.248-6.248-6.248-16.38 0-22.62l112-112C233.3 128.1 240.1 126.7 246.1 129.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleLeft;

import * as React from "react";
import { SVGProps } from "react";

const SvgTick = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" {...props}>
    <path
      d="M126.1 109.8 101.7 255c-3.27 19.1-19.15 33-37.71 33s-34.44-13.9-37.74-33L1.044 109.9c-3.416-19.63 1.648-39.64 13.85-54.93 24.34-30.57 73.86-30.57 98.2 0C125.3 70.21 130.4 90.22 126.1 109.8z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTick;

import * as React from "react";
import { SVGProps } from "react";

const SvgShirtRunning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="shirt-running_svg__fa-primary"
      d="M360.1 215.5.072 464.7C.47 490.9 21.74 512 48 512h288c26.51 0 48-21.49 48-48V256c-9.5-12.7-17.2-26.4-23.9-40.5zM336 112V16c0-8.838-7.2-16-16-16h-32c-8.836 0-16 7.162-16 16v64c0 44.2-35.8 80-80 80s-80-35.8-80-80V16c0-8.838-7.2-16-16-16H64c-8.84 0-16 7.162-16 16v96c0 51.9-16.84 102.5-48 144v130.9l339.5-235c-2.3-13.1-3.5-26.4-3.5-39.9z"
    />
    <path
      d="M360.1 215.5.072 464.7c-.004-.2-.072-.5-.072-.7v-77.08l339.5-235c3.7 22.08 10.9 43.38 20.6 63.58z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShirtRunning;

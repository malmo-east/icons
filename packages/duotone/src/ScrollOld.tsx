import * as React from "react";
import { SVGProps } from "react";

const SvgScrollOld = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="scroll-old_svg__fa-primary"
      d="M128 96v64H16C7.164 160 .9 152.836.9 144L0 96c0-35.35 28.65-64 64-64s64 28.65 64 64zm432 256H416l-32 32-31.1-32h-64l-.9 48c0 44.18-35.82 80-80 80h256c61.9 0 112-50.1 112-112 0-8.9-7.1-16-16-16z"
    />
    <path
      d="m480 128-31.1 32 31.1 31.1v32L448 256l31.1 31.1.9 64.9h-63.1l-32 32-31.1-32h-64l-1.8 48c0 44.18-35.82 80-80 80-44.2 0-80-35.8-80-80V256l32-32-32-32V96c0-35.35-28.65-64-64-64h320c53 0 96 43 96 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgScrollOld;

import * as React from "react";
import { SVGProps } from "react";

const SvgScroll = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="scroll_svg__fa-primary"
      d="M64 32C28.65 32 0 60.65 0 96v48c0 8.8 7.164 16 16 16h112V96c0-35.35-28.65-64-64-64zm496 320H288v48c0 44.18-35.82 80-80 80h256c61.88 0 112-50.13 112-112 0-8.9-7.1-16-16-16z"
    />
    <path
      d="M480 128v224H288v48c0 44.18-35.82 80-80 80-44.2 0-80-35.8-80-80V96c0-35.35-28.65-64-64-64h320c53 0 96 43 96 96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgScroll;

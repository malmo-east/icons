import * as React from "react";
import { SVGProps } from "react";

const SvgColon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" {...props}>
    <path
      className="colon_svg__fa-primary"
      d="M64 192c35.35 0 64-28.65 64-64S99.35 64 64 64 0 92.65 0 128c0 35.3 28.66 64 64 64z"
    />
    <path
      d="M64 320c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64c0-35.3-28.65-64-64-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgColon;

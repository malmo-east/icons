import * as React from "react";
import { SVGProps } from "react";

const SvgColumns3 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="columns-3_svg__fa-primary"
      d="M576 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h512zm0 64H64v320h512V96z"
    />
    <path
      d="M192 96h64v320h-64V96zm192 0h64v320h-64V96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgColumns3;

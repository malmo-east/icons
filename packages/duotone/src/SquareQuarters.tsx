import * as React from "react";
import { SVGProps } from "react";

const SvgSquareQuarters = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-quarters_svg__fa-primary"
      d="M384 32H64C28.64 32 0 60.64 0 96v320c0 35.36 28.64 64 64 64h320c35.36 0 64-28.64 64-64V96c0-35.36-28.6-64-64-64zm0 384H64V96h320v320z"
    />
    <path
      d="m64 416 160-160L64 96v320zm160-160 160 160V96L224 256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareQuarters;

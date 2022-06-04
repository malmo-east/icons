import * as React from "react";
import { SVGProps } from "react";

const SvgGrate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="grate_svg__fa-primary"
      d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm0 384H64V96h320v320z"
    />
    <path
      d="M352 288v128h-64V288h-32v128h-64V288h-32v128H96V288H64v-64h32V96h64v128h32V96h64v128h32V96h64v128h32v64h-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGrate;

import * as React from "react";
import { SVGProps } from "react";

const SvgExpand = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="expand_svg__fa-primary"
      d="M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32s-14.3-32-32-32zm288 288c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96c0-17.7-14.3-32-32-32z"
    />
    <path
      d="M416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64c0-17.69-14.3-32-32-32zM128 416H64v-64c0-17.69-14.31-32-32-32S0 334.31 0 352v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32s-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgExpand;

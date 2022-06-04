import * as React from "react";
import { SVGProps } from "react";

const SvgBenchTree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="bench-tree_svg__fa-primary"
      d="M360 352h-40v-32h32v-96c0-17.67-14.33-32-32-32H64c-17.67 0-32 14.3-32 32v96h32v32H24c-13.25 0-24 10.7-24 24v16c0 13.3 10.75 24 24 24h8v64c0 17.69 14.31 32 32 32s32-14.31 32-32v-64h192v64c0 17.69 14.31 32 32 32s32-14.31 32-32v-64h8c13.25 0 24-10.75 24-24v-16c0-13.3-10.7-24-24-24zm-72 0H96v-32h192v32z"
    />
    <path
      d="M640 176c0 44.2-35.8 80-80 80h-16v224c0 17.69-14.31 32-32 32s-32-14.31-32-32V256h-16c-44.2 0-80-35.8-80-80 0-26.8 13.29-50.38 33.52-64.89C416.7 106.2 416 101.2 416 96c0-53.02 42.98-96 96-96s96 42.98 96 96c0 5.174-.736 10.15-1.523 15.11C626.7 125.6 640 149.2 640 176z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBenchTree;

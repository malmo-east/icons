import * as React from "react";
import { SVGProps } from "react";

const SvgRoadLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="road-lock_svg__fa-primary"
      d="M448 320v-48c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32zm48 0h64v-48c0-17.7-14.3-32-32-32s-32 14.3-32 32v48z"
    />
    <path
      d="M213.2 32H288v64c0 17.7 14.3 32 32 32s32-14.3 32-32V32h74.8c27.1 0 51.2 17.08 60.3 42.63l30.4 85.87C460.6 165.8 416 213.7 416 272v24.6c-19.1 11-32 31.7-32 55.4v128h-32v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H86.61C56.45 480 32 455.5 32 425.4c0-6.2 1.06-12.4 3.13-18.2L152.9 74.63C161.1 49.08 186.1 32 213.2 32zM288 224v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRoadLock;

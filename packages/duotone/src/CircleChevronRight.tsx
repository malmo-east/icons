import * as React from "react";
import { SVGProps } from "react";

const SvgCircleChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-chevron-right_svg__fa-primary"
      d="m358.6 278.6-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256l-89.4-89.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256s-3.1 16.4-9.4 22.6z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm102.6 278.6-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256l-89.4-89.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256s-3.1 16.4-9.4 22.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleChevronRight;

import * as React from "react";
import { SVGProps } from "react";

const SvgCircleArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-arrow-right_svg__fa-primary"
      d="M406.6 278.6 303.5 381.7c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128c-17.7 0-32-14.3-32-32s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256c0 4.9-1.4 14.7-9.4 22.6z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm150.6 278.6L303.5 381.7c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128c-17.7 0-32-14.3-32-32s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256c0 4.9-1.4 14.7-9.4 22.6z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleArrowRight;
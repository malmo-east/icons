import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="arrow-down-right_svg__fa-primary"
      d="M288 416H64c-17.67 0-32-14.31-32-32s14.33-32 32-32h192V160c0-17.69 14.33-32 32-32s32 14.31 32 32v224c0 17.7-14.3 32-32 32z"
    />
    <path
      d="M210.8 352 9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L256 306.8V352h-45.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowDownRight;

import * as React from "react";
import { SVGProps } from "react";

const SvgSquarePollHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-poll-horizontal_svg__fa-primary"
      d="M224 128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32s14.3-32 32-32h96zm96 96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h192zM160 384h-32c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
    />
    <path
      d="M448 416c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320zM256 160c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32zm-128 64c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32H128zm64 128c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32-14.3 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquarePollHorizontal;
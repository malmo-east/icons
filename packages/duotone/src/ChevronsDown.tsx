import * as React from "react";
import { SVGProps } from "react";

const SvgChevronsDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="chevrons-down_svg__fa-primary"
      d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 402.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 476.9 232.2 480 224 480z"
    />
    <path
      d="M224 288c-8.2 0-16.4-3.1-22.6-9.4l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 210.8 393.4 41.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 284.9 232.2 288 224 288z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChevronsDown;

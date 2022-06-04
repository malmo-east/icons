import * as React from "react";
import { SVGProps } from "react";

const SvgChevronsRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="chevrons-right_svg__fa-primary"
      d="M224 480c-8.188 0-16.38-3.125-22.62-9.375-12.5-12.5-12.5-32.75 0-45.25L370.8 256 201.4 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C240.4 476.9 232.2 480 224 480z"
    />
    <path
      d="M32 480c-8.188 0-16.38-3.125-22.62-9.375-12.5-12.5-12.5-32.75 0-45.25L178.8 256 9.375 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C48.38 476.9 40.19 480 32 480z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChevronsRight;

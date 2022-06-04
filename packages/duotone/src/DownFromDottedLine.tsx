import * as React from "react";
import { SVGProps } from "react";

const SvgDownFromDottedLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="down-from-dotted-line_svg__fa-primary"
      d="M224 480c-6.6 0-12.9-2.7-17.4-7.5l-136.05-144c-6.58-7-8.38-17.2-4.59-26A24 24 0 0 1 88 288h72V160c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v128h72c9.6 0 18.2 5.7 22 14.5 3.8 8.8 2 19-4.6 26l-136 144c-4.5 4.8-10.8 7.5-17.4 7.5z"
    />
    <path
      d="M384 64c0-17.67 14.3-32 32-32s32 14.33 32 32-14.3 32-32 32-32-14.33-32-32zm-96 0c0-17.67 14.3-32 32-32s32 14.33 32 32-14.3 32-32 32-32-14.33-32-32zm-32 0c0 17.67-14.3 32-32 32s-32-14.33-32-32 14.3-32 32-32 32 14.33 32 32zM96 64c0-17.67 14.3-32 32-32s32 14.33 32 32-14.3 32-32 32-32-14.33-32-32zm-32 0c0 17.67-14.33 32-32 32S0 81.67 0 64s14.33-32 32-32 32 14.33 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgDownFromDottedLine;

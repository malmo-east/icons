import * as React from "react";
import { SVGProps } from "react";

const SvgArrowLeftFromLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="arrow-left-from-line_svg__fa-primary"
      d="M182.6 406.6c-12.5 12.5-32.75 12.5-45.25 0l-128-128c-12.5-12.5-12.5-32.75 0-45.25l128-128c12.5-12.5 32.75-12.5 45.25 0 6.3 6.25 9.4 14.45 9.4 22.65s-3.1 16.4-9.4 22.6L109.3 224H288c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.42 12.52 12.42 32.72-.08 45.22z"
    />
    <path
      d="M384 96v320c0 17.69 14.31 32 32 32s32-14.31 32-32V96c0-17.69-14.31-32-32-32s-32 14.31-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowLeftFromLine;

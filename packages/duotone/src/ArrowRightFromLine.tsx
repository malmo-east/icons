import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRightFromLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="arrow-right-from-line_svg__fa-primary"
      d="M265.4 105.4c12.5-12.5 32.75-12.5 45.25 0l128 128c12.5 12.5 12.5 32.75 0 45.25l-128 128c-12.5 12.5-32.75 12.5-45.25 0-6.3-6.25-9.4-14.45-9.4-22.65s3.125-16.38 9.375-22.62L338.8 288H160c-17.7 0-32-14.3-32-32s14.31-32 32-32h178.8l-73.38-73.38c-12.52-12.52-12.52-32.72-.02-45.22z"
    />
    <path
      d="M64 416V96c0-17.69-14.31-32-32-32S0 78.31 0 96v320c0 17.69 14.31 32 32 32s32-14.3 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowRightFromLine;

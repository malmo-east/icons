import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpRightFromSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="arrow-up-right-from-square_svg__fa-primary"
      d="M256 64c0-17.67 14.3-32 32-32h128c17.7 0 32 14.33 32 32v128c0 17.7-14.3 32-32 32s-32-14.3-32-32v-50.7L214.6 310.6c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2L338.7 96H288c-17.7 0-32-14.33-32-32z"
    />
    <path
      d="M0 128c0-35.35 28.65-64 64-64h96c17.7 0 32 14.33 32 32 0 17.7-14.3 32-32 32H64v288h288v-96c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowUpRightFromSquare;

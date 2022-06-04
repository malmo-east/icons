import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="arrow-up-right_svg__fa-primary"
      d="M288 384c-17.67 0-32-14.31-32-32V160H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h224c17.67 0 32 14.31 32 32v224c0 17.7-14.3 32-32 32z"
    />
    <path
      d="M256 205.3 54.6 406.7c-6.22 6.2-14.41 9.3-22.6 9.3s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L210.8 160H256v45.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowUpRight;

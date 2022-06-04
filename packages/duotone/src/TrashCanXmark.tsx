import * as React from "react";
import { SVGProps } from "react";

const SvgTrashCanXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="trash-can-xmark_svg__fa-primary"
      d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0h120.4c12.1 0 23.2 6.848 28.6 17.69L320 32h96c17.7 0 32 14.33 32 32s-14.3 32-32 32H32C14.33 96 0 81.67 0 64s14.33-32 32-32h96l7.2-14.31zM312 264c13.3 0 24 10.7 24 24s-10.7 24-24 24H135.1c-12.4 0-24-10.7-24-24s11.6-24 24-24H312z"
    />
    <path
      d="M416 448c0 35.3-28.7 64-64 64H96c-35.35 0-64-28.7-64-64V96h384v352zM136 264c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTrashCanXmark;

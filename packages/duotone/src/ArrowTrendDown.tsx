import * as React from "react";
import { SVGProps } from "react";

const SvgArrowTrendDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="arrow-trend-down_svg__fa-primary"
      d="M384 352h128V224c0-17.7 14.3-32 32-32s32 14.3 32 32v160c0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
    />
    <path
      d="M466.7 352 320 205.3 214.6 310.6c-12.5 12.5-32.7 12.5-45.2 0L9.372 150.6c-12.496-12.5-12.496-32.7 0-45.2 12.498-12.52 32.758-12.52 45.258 0L191.1 242.7l106.3-105.3c12.5-12.5 32.7-12.5 45.2 0L512 306.7V352h-45.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowTrendDown;

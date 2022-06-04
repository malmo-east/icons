import * as React from "react";
import { SVGProps } from "react";

const SvgGripLinesVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path
      className="grip-lines-vertical_svg__fa-primary"
      d="M0 64c0-17.67 14.33-32 32-32s32 14.33 32 32v384c0 17.7-14.33 32-32 32S0 465.7 0 448V64z"
    />
    <path
      d="M128 64c0-17.67 14.3-32 32-32s32 14.33 32 32v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGripLinesVertical;

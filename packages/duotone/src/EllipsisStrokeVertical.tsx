import * as React from "react";
import { SVGProps } from "react";

const SvgEllipsisStrokeVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path
      className="ellipsis-stroke-vertical_svg__fa-primary"
      d="M96 344c39.8 0 72 32.2 72 72s-32.2 72-72 72c-39.76 0-72-32.2-72-72s32.24-72 72-72zm-24 72c0 13.3 10.75 24 24 24 13.3 0 24-10.7 24-24s-10.7-24-24-24c-13.25 0-24 10.7-24 24zM96 24c39.8 0 72 32.24 72 72 0 39.8-32.2 72-72 72-39.76 0-72-32.2-72-72 0-39.76 32.24-72 72-72zM72 96c0 13.3 10.75 24 24 24 13.3 0 24-10.7 24-24 0-13.25-10.7-24-24-24-13.25 0-24 10.75-24 24z"
    />
    <path
      d="M96 328c-39.76 0-72-32.2-72-72s32.24-72 72-72c39.8 0 72 32.2 72 72s-32.2 72-72 72zm24-72c0-13.3-10.7-24-24-24-13.25 0-24 10.7-24 24s10.75 24 24 24c13.3 0 24-10.7 24-24z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgEllipsisStrokeVertical;
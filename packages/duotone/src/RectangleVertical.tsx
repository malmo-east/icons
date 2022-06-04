import * as React from "react";
import { SVGProps } from "react";

const SvgRectangleVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      d="M320 0c35.3 0 64 28.65 64 64v384c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRectangleVertical;

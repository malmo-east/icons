import * as React from "react";
import { SVGProps } from "react";

const SvgCircleHalfStroke = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-half-stroke_svg__fa-primary"
      d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0v512z"
    />
    <path
      d="M256 512v-64c106 0 192-86 192-192 0-106.9-86-192-192-192V0c141.4 0 256 114.6 256 256S397.4 512 256 512z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleHalfStroke;

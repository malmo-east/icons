import * as React from "react";
import { SVGProps } from "react";

const SvgCircleHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-half_svg__fa-primary"
      d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0v512z"
    />
    <path
      d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512V0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleHalf;

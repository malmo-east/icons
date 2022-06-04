import * as React from "react";
import { SVGProps } from "react";

const SvgCircleThreeQuarters = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-three-quarters_svg__fa-primary"
      d="M256 256h256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0v256z"
    />
    <path
      d="M256 256V0c141.4 0 256 114.6 256 256H256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleThreeQuarters;

import * as React from "react";
import { SVGProps } from "react";

const SvgCircleSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      d="M320 256c0 88.4-71.6 160-160 160C71.63 416 0 344.4 0 256S71.63 96 160 96c88.4 0 160 71.6 160 160z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleSmall;

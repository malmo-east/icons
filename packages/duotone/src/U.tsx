import * as React from "react";
import { SVGProps } from "react";

const SvgU = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      d="M384 64.01v225.7c0 104.1-86.13 190.3-192 190.3S0 394.63 0 289.71V64.01c0-17.67 14.33-32 32-32s32 14.33 32 32v225.7c0 69.67 57.42 126.3 128 126.3s128-56.67 128-126.3V64.01c0-17.67 14.33-32 32-32s32 14.33 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgU;

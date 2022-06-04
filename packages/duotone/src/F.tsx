import * as React from "react";
import { SVGProps } from "react";

const SvgF = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      d="M320 64.01c0 17.67-14.33 32-32 32H64v128h160c17.67 0 32 14.32 32 31.1s-14.33 32-32 32H64v160c0 17.67-14.33 32-32 32s-32-14.33-32-32v-384c0-16.77 14.33-31.1 32-31.1h256c17.7 0 32 14.33 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgF;

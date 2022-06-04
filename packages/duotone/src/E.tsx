import * as React from "react";
import { SVGProps } from "react";

const SvgE = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      d="M320 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32V64c0-17.66 14.33-31.99 32-31.99h256c17.67 0 32 14.33 32 32s-14.33 32-32 32H64v128h160c17.67 0 32 14.32 32 31.99s-14.33 32.01-32 32.01H64v128h224c17.7-.01 32 14.29 32 31.99z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgE;

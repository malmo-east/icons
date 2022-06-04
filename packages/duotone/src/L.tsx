import * as React from "react";
import { SVGProps } from "react";

const SvgL = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      d="M320 448c0 17.67-14.31 32-32 32H64c-17.69 0-32-14.33-32-32V64c0-17.66 14.31-31.99 32-31.99s32 14.33 32 32v352h192c17.7-.01 32 14.29 32 31.99z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgL;

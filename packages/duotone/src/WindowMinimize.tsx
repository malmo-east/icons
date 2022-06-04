import * as React from "react";
import { SVGProps } from "react";

const SvgWindowMinimize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      d="M0 448c0-17.7 14.33-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgWindowMinimize;

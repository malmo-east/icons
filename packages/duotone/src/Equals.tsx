import * as React from "react";
import { SVGProps } from "react";

const SvgEquals = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      d="M48 192h352c17.69 0 32-14.32 32-32s-14.31-31.1-32-31.1H48c-17.69 0-32 14.31-32 31.1s14.31 32 32 32zm352 128H48c-17.69 0-32 14.31-32 31.1s14.31 32 32 32h352c17.69 0 32-14.32 32-32S417.7 320 400 320z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgEquals;
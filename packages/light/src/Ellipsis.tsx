import * as React from "react";
import { SVGProps } from "react";

const SvgEllipsis = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M352 256c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm-160 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm-96 0c0 17.7-14.33 32-32 32s-32-14.3-32-32 14.33-32 32-32 32 14.3 32 32z" />
  </svg>
);

export default SvgEllipsis;

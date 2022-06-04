import * as React from "react";
import { SVGProps } from "react";

const SvgPallet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M632 496h-80V368h80c4.406 0 8-3.578 8-8s-3.6-8-8-8H8c-4.406 0-8 3.6-8 8s3.594 8 8 8h80v128H8c-4.406 0-8 3.6-8 8s3.594 8 8 8h624c4.406 0 8-3.578 8-8s-3.6-8-8-8zm-320 0H104V368h208v128zm224 0H328V368h208v128z" />
  </svg>
);

export default SvgPallet;

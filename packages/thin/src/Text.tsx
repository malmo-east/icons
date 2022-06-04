import * as React from "react";
import { SVGProps } from "react";

const SvgText = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 40v80c0 4.4-3.6 8-8 8s-8-3.6-8-8V48H232v416h80c4.422 0 8 3.578 8 8s-3.6 8-8 8H136c-4.4 0-8-3.6-8-8s3.578-8 8-8h80V48H32v72c0 4.4-3.58 8-8 8s-8-3.6-8-8V40c0-4.42 3.58-8 8-8h400c4.4 0 8 3.58 8 8z" />
  </svg>
);

export default SvgText;

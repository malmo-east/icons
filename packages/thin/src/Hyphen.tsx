import * as React from "react";
import { SVGProps } from "react";

const SvgHyphen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M8 264h304c4.406 0 8-3.572 8-7.994 0-4.406-3.6-8.006-8-8.006H8c-4.406 0-8 3.6-8 8s3.594 8 8 8z" />
  </svg>
);

export default SvgHyphen;

import * as React from "react";
import { SVGProps } from "react";

const SvgI = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 472c0 4.406-3.594 8-8 8H8c-4.406 0-8-3.6-8-8s3.594-8 8-8h144V48H8c-4.406 0-8-3.59-8-8s3.594-8 8-8h304c4.4 0 8 3.59 8 8s-3.6 8-8 8H168v416h144c4.4 0 8 3.6 8 8z" />
  </svg>
);

export default SvgI;

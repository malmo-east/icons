import * as React from "react";
import { SVGProps } from "react";

const SvgUnderline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M8 16h64v216c0 83.81 68.19 152 152 152s152-68.2 152-152V16h64c4.4 0 8-3.58 8-8s-3.6-8-8-8H296c-4.4 0-8 3.578-8 8s3.594 8 8 8h64v216c0 74.98-61 136-136 136S88 306.1 88 232V16h64c4.4 0 8-3.58 8-8s-3.6-8-8-8H8C3.594 0 0 3.578 0 8s3.594 8 8 8zm432 480H8c-4.406 0-8 3.6-8 8s3.594 8 8 8h432c4.406 0 8-3.578 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgUnderline;

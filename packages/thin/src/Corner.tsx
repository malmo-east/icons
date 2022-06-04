import * as React from "react";
import { SVGProps } from "react";

const SvgCorner = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M440 384c-4.406 0-8-3.594-8-8V208H8c-4.406 0-8-3.6-8-8s3.594-8 8-8h432c4.4 0 8 3.6 8 8v176c0 4.4-3.6 8-8 8z" />
  </svg>
);

export default SvgCorner;

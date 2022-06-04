import * as React from "react";
import { SVGProps } from "react";

const SvgBracketsSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M56 48h80c4.406 0 8-3.578 8-8s-3.6-8-8-8H56c-22.06 0-40 17.94-40 40v368c0 22.1 17.94 40 40 40h80c4.406 0 8-3.578 8-8s-3.6-8-8-8H56c-13.22 0-24-10.8-24-24V72c0-13.23 10.78-24 24-24zm336-16h-80c-4.406 0-8 3.578-8 8s3.594 8 8 8h80c13.2 0 24 10.77 24 24v368c0 13.23-10.78 24-24 24h-80c-4.406 0-8 3.578-8 8s3.6 8 8 8h80c22.06 0 40-17.94 40-40V72c0-22.06-17.9-40-40-40z" />
  </svg>
);

export default SvgBracketsSquare;

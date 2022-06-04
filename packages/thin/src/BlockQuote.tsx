import * as React from "react";
import { SVGProps } from "react";

const SvgBlockQuote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M440 88c4.4 0 8 3.58 8 8 0 4.4-3.6 8-8 8H8c-4.418 0-8-3.6-8-8a8 8 0 0 1 8-8h432zm0 160c4.4 0 8 3.6 8 8s-3.6 8-8 8H136c-4.4 0-8-3.6-8-8s3.6-8 8-8h304zM128 416c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8s-3.6 8-8 8H136c-4.4 0-8-3.6-8-8zM0 232c0-4.4 3.582-8 8-8 4.42 0 8 3.6 8 8v208c0 4.4-3.58 8-8 8-4.418 0-8-3.6-8-8V232z" />
  </svg>
);

export default SvgBlockQuote;

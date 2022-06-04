import * as React from "react";
import { SVGProps } from "react";

const SvgHorizontalRule = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M616 280H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h592c13.25 0 24 10.72 24 23.97S629.3 280 616 280z" />
  </svg>
);

export default SvgHorizontalRule;

import * as React from "react";
import { SVGProps } from "react";

const SvgHorizontalRule = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M624 272H16c-8.844 0-16-7.1-16-16s7.156-16 16-16h608c8.844 0 16 7.131 16 15.97S632.8 272 624 272z" />
  </svg>
);

export default SvgHorizontalRule;

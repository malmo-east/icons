import * as React from "react";
import { SVGProps } from "react";

const SvgParagraph = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M424 32H195.8C109.04 32 35.1 99.48 32.1 186.2 28.88 277.2 101.7 352 192 352h48v104c0 13.25 10.75 24 24 24s24-10.7 24-24V80h48v376c0 13.25 10.75 24 24 24s24-10.7 24-24V80h40c13.3 0 24-10.75 24-24 0-13.26-10.7-24-24-24zM240 304h-48c-61.9 0-112-50.1-112-112S130.1 80 192 80h48v224z" />
  </svg>
);

export default SvgParagraph;

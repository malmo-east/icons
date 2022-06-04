import * as React from "react";
import { SVGProps } from "react";

const SvgExpandWide = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M120 64H8c-4.406 0-8 3.59-8 8v112c0 4.4 3.594 8 8 8s8-3.6 8-8V80h104c4.4 0 8-3.59 8-8s-3.6-8-8-8zm384 0H392c-4.4 0-8 3.59-8 8s3.594 8 8 8h104v104c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.41-3.6-8-8-8zm0 256c-4.406 0-8 3.594-8 8v104H392c-4.406 0-8 3.594-8 8s3.6 8 8 8h112c4.406 0 8-3.594 8-8V328c0-4.4-3.6-8-8-8zM120 432H16V328c0-4.4-3.59-8-8-8s-8 3.6-8 8v112c0 4.4 3.594 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgExpandWide;

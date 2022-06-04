import * as React from "react";
import { SVGProps } from "react";

const SvgOverline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M232.3 128h-16.5C123.1 128 48 203.1 48 295.8v48.5C48 436.9 123.1 512 215.8 512h16.5c92.6 0 167.7-75.1 167.7-167.7v-48.5c0-92.7-75.1-167.8-167.7-167.8zM384 344.3c0 83.6-68.1 151.7-151.7 151.7h-16.5C132.1 496 64 427.9 64 344.3v-48.5C64 212.1 132.1 144 215.8 144h16.5c83.6 0 151.7 68.1 151.7 151.8v48.5zM440 0H8C3.594 0 0 3.578 0 8s3.594 8 8 8h432c4.4 0 8-3.58 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgOverline;

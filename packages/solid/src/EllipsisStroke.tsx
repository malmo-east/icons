import * as React from "react";
import { SVGProps } from "react";

const SvgEllipsisStroke = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M488 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm-72-24c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm-88 24c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm-72-24c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM24 256c0-39.8 32.24-72 72-72 39.8 0 72 32.2 72 72s-32.2 72-72 72c-39.76 0-72-32.2-72-72zm72 24c13.3 0 24-10.7 24-24s-10.7-24-24-24c-13.25 0-24 10.7-24 24s10.75 24 24 24z" />
  </svg>
);

export default SvgEllipsisStroke;

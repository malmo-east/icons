import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M186.3 381.7a7.994 7.994 0 0 0 11.31 0l152-152c1.59-1.6 2.39-3.6 2.39-5.7s-.781-4.094-2.344-5.656a7.994 7.994 0 0 0-11.31 0L200 356.7V40c0-4.41-3.6-8-8-8s-8 3.59-8 8v316.7L45.66 218.3c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31L186.3 381.7zM8 480h368a8 8 0 0 0 0-16H8c-4.418 0-8 3.6-8 8s3.582 8 8 8z" />
  </svg>
);

export default SvgArrowDownToLine;

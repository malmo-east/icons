import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M197.7 130.3a7.994 7.994 0 0 0-11.31 0l-152 152c-1.61 1.6-2.39 3.6-2.39 5.7s.781 4.094 2.344 5.656a7.994 7.994 0 0 0 11.31 0L184 155.3V472c0 4.4 3.6 8 8 8s8-3.594 8-8V155.3l138.3 138.3c3.125 3.125 8.188 3.125 11.31 0s3.125-8.188 0-11.31L197.7 130.3zM376 32H8c-4.418 0-8 3.58-8 8s3.582 8 8 8h368c4.4 0 8-3.58 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgArrowUpToLine;

import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsLeftRightToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M8 64c4.42 0 8 3.58 8 8v368c0 4.4-3.58 8-8 8-4.418 0-8-3.6-8-8V72a8 8 0 0 1 8-8zm197.7 90.3c3.1 3.2 3.1 8.2 0 11.4L123.3 248h393.4l-82.4-82.3a8.15 8.15 0 0 1 0-11.4c3.2-3.1 8.2-3.1 11.4 0l96 96c3.1 3.2 3.1 8.2 0 11.4l-96 96a8.15 8.15 0 0 1-11.4 0 8.15 8.15 0 0 1 0-11.4l82.4-82.3H123.3l82.4 82.3c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0l-95.96-96a8.112 8.112 0 0 1 0-11.4l95.96-96c3.2-3.1 8.2-3.1 11.4 0zM640 440c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-4.42 3.6-8 8-8s8 3.58 8 8v368z" />
  </svg>
);

export default SvgArrowsLeftRightToLine;

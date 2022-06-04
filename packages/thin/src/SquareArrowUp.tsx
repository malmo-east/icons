import * as React from "react";
import { SVGProps } from "react";

const SvgSquareArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M229.7 130.3a7.994 7.994 0 0 0-11.31 0l-120 120c-1.61 1.6-2.39 3.6-2.39 5.7s.781 4.094 2.344 5.656a7.994 7.994 0 0 0 11.31 0L216 155.3V376c0 4.406 3.576 8 7.997 8s8.003-3.6 8.003-8V155.3l106.3 106.3c3.125 3.125 8.188 3.125 11.31 0s3.125-8.188 0-11.31L229.7 130.3zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm48 384c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v320z" />
  </svg>
);

export default SvgSquareArrowUp;

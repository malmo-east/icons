import * as React from "react";
import { SVGProps } from "react";

const SvgBookArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="book-arrow-up_svg__fa-primary"
      d="M416 448H264v64h152c17.67 0 32-14.33 32-31.1 0-18.6-14.3-32.9-32-32.9zM400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h120v-64H96c-17.67 0-32-14.33-32-32s14.33-32 32-32h120V209.9l-39.9 38.2c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94l80-80c9.372-9.372 24.57-9.372 33.94 0l80 80c9.375 9.375 9.375 24.56 0 33.94-3.8 5.6-9.9 7.9-16.1 7.9s-12.28-2.344-16.97-7.031L264 209.9V384h136c26.51 0 48-21.49 48-48V48c0-26.51-21.5-48-48-48z"
    />
    <path
      d="M64 416c0 17.67 14.33 32 32 32h120v-64H96c-17.67 0-32 14.3-32 32zm200-32v64h152v-64H264z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBookArrowUp;

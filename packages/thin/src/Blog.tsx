import * as React from "react";
import { SVGProps } from "react";

const SvgBlog = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M200 32c-4.4 0-8 3.58-8 8s3.6 8 8 8c145.6 0 264 118.4 264 264 0 4.422 3.578 8 8 8s8-3.6 8-8c0-154.4-125.6-280-280-280zm0 96c-4.4 0-8 3.6-8 8s3.6 8 8 8c92.64 0 168 75.36 168 168 0 4.422 3.578 8 8 8s8-3.6 8-8c0-101.5-82.5-184-184-184zm-40 96c-4.4 0-8 3.6-8 8s3.6 8 8 8c61.75 0 112 50.25 112 112s-50.2 112-112 112S48 413.8 48 352V104c0-4.42-3.58-8-8-8s-8 3.58-8 8v248c0 70.58 57.42 128 128 128s128-57.42 128-128-57.4-128-128-128z" />
  </svg>
);

export default SvgBlog;

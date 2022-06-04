import * as React from "react";
import { SVGProps } from "react";

const SvgKeySkeletonLeftRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M639.1 128c0 70.7-56.4 128-128 128-61.6 0-113.6-44.8-124.9-104.9h-83.1V200c0 13.3-9.8 24-24 24-12.4 0-24-10.7-24-24v-48.9h-48V200c0 13.3-9.9 24-24 24-12.4-.9-24-10.7-24-24.9v-72c0-12.4 11.6-24 24-24h203.1C397.5 44.78 449.5 0 511.1 0c71.6 0 128 57.31 128 128zm-128-80c-43.3 0-80 35.82-80 80 0 44.2 36.7 80 80 80 45.1 0 80-35.8 80-80 0-44.18-34.9-80-80-80zM0 384c0-70.7 57.31-128 128-128 62.5 0 114.5 44.8 125.8 104H336v-48c0-13.3 10.7-24 24-24s24 10.7 24 24v48h48v-48.9c0-12.4 10.7-24 24-23.1 13.3 0 24 10.7 24 24v72c-.9 13.3-10.7 24-24 24H253.8c-11.3 59.2-63.3 104-125.8 104C57.31 512 0 454.7 0 384zm128 80c44.2 0 80-35.8 80-80s-35.8-80-80-80c-44.18 0-80 35.8-80 80s35.82 80 80 80z" />
  </svg>
);

export default SvgKeySkeletonLeftRight;
import * as React from "react";
import { SVGProps } from "react";

const SvgMapPin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M88 144c-4.42 0-8-3.6-8-8 0-48.6 39.4-88 88-88 4.4 0 8 3.58 8 8s-3.6 8-8 8c-39.8 0-72 32.24-72 72 0 4.4-3.58 8-8 8zm232 0c0 76.8-60.2 139.6-136 143.8V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V287.8c-75.81-4.2-136-67-136-143.8C32 64.47 96.47 0 176 0c79.5 0 144 64.47 144 144zM176 272c70.7 0 128-57.3 128-128 0-70.69-57.3-128-128-128S48 73.31 48 144c0 70.7 57.3 128 128 128z" />
  </svg>
);

export default SvgMapPin;

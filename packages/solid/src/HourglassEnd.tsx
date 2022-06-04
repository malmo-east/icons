import * as React from "react";
import { SVGProps } from "react";

const SvgHourglassEnd = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M352 0c17.7 0 32 14.33 32 32s-14.3 32-32 32v10.98c0 42.42-16.9 83.12-46.9 113.12L237.3 256l67.8 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32v-11c0-42.4 16.86-83.1 46.86-113.1L146.7 256l-67.84-67.9C48.86 158.1 32 117.4 32 74.98V64C14.33 64 0 49.67 0 32S14.33 0 32 0h320zM124.1 142.9l67.9 67.8 67.9-67.8c18-18 28.1-42.5 28.1-67.92V64H96v10.98c0 25.42 10.1 49.92 28.1 67.92z" />
  </svg>
);

export default SvgHourglassEnd;
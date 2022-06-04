import * as React from "react";
import { SVGProps } from "react";

const SvgRoad = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M256 96c0 17.7 14.3 32 32 32s32-14.3 32-32V32h74.8c27.1 0 51.2 17.08 60.3 42.63L572.9 407.2c2 5.8 3.1 12 3.1 18.2 0 30.1-24.5 54.6-54.6 54.6H320v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H54.61C24.45 480 0 455.5 0 425.4c0-6.2 1.06-12.4 3.133-18.2L120.9 74.63C129.1 49.08 154.1 32 181.2 32h73.9l.9 64zm64 128c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64z" />
  </svg>
);

export default SvgRoad;

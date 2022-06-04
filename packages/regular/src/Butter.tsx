import * as React from "react";
import { SVGProps } from "react";

const SvgButter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 112c0-26.51-21.5-48-48-48H112c-26.51 0-48 21.49-48 48v176h512V112zM416 240H112V112h304v128zm112 0h-64V112h64v128zm80 80H32c-17.67 0-32 14.33-32 32s14.33 32 32 32v32c0 17.67 14.33 32 32 32h512c17.67 0 32-14.33 32-32v-32c17.67 0 32-14.33 32-32 0-17.7-14.3-32-32-32z" />
  </svg>
);

export default SvgButter;
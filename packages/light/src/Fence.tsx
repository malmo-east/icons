import * as React from "react";
import { SVGProps } from "react";

const SvgFence = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 32c5.04 0 9.78 2.37 12.8 6.4l44.8 59.73c4.2 5.57 6.4 12.27 6.4 19.17V160h64v-42.7c0-6.9 2.2-13.6 6.4-19.17l44.8-59.73c3-4.03 6.9-6.4 12.8-6.4 5 0 9.8 2.37 12.8 6.4l44.8 59.73c4.2 5.57 6.4 12.27 6.4 19.17V160h64v-42.7c0-6.9 2.2-13.6 6.4-19.17l44.8-59.73c3-4.03 6.9-6.4 12.8-6.4 5 0 9.8 2.37 12.8 6.4l44.8 59.73c4.2 5.57 6.4 12.27 6.4 19.17V448c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64h-64v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-64h-64v64c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32V117.3c0-6.9 2.246-13.6 6.4-19.17L51.2 38.4C54.22 34.37 58.96 32 64 32zm224 85.3-32-42.63-32 42.63V448h64V117.3zM320 352h64V192h-64v160zm96 96h64V117.3l-32-42.63-32 42.63V448zM128 192v160h64V192h-64zm-32-74.7L64 74.67 32 117.3V448h64V117.3z" />
  </svg>
);

export default SvgFence;
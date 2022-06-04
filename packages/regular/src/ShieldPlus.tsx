import * as React from "react";
import { SVGProps } from "react";

const SvgShieldPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m466.5 83.69-192-80.01C269.6 1.656 261.3 0 256.1 0c-5.3 0-13.6 1.656-18.5 3.688l-192 80.01C27.69 91.08 16 108.6 16 127.1 16 385.2 205.2 512 255.1 512c52 0 240.9-128.2 240.9-384.9 0-18.5-11.7-36.02-29.5-43.41zM256.1 48.03c0-.01.1 0 0 0zm-1 415.97C163.5 425.5 64.06 303.9 64.06 128.1c0-.05 0 .05 0 0l190.8-79.64c.332-.102.742-.302 1.275-.4L448 127.1c0 203.4-125.6 309.2-192.9 336.9zM232 175.1V232h-56c-13.26 0-23.1 10.74-23.1 23.1 0 13.25 10.73 23.1 23.1 23.1h56V336c0 13.26 10.73 23.1 23.1 23.1 13.26 0 23.1-10.74 23.1-23.1v-56.9h56c13.26 0 23.1-10.74 23.1-23.1s-8-24-21.3-24h-56v-56.9c0-13.26-10.74-23.1-23.1-23.1S232 162.7 232 175.1z" />
  </svg>
);

export default SvgShieldPlus;
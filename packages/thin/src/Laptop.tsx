import * as React from "react";
import { SVGProps } from "react";

const SvgLaptop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M72 351.1a8 8 0 0 0 8-8v-264c0-17.67 14.33-32 32-32h416c17.67 0 32 14.33 32 32v264a8 8 0 0 0 16 0v-264c0-26.4-21.6-48-48-48H112c-26.4 0-48 21.6-48 48v263.1c0 6.2 3.58 8.9 8 8.9zm552 32H16c-8.812 0-16 7.203-16 16v16c0 35.2 28.81 64 64 64h512c35.19 0 64-28.8 64-64v-16c0-7.9-7.2-16-16-16zm0 32c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48v-16h608v16z" />
  </svg>
);

export default SvgLaptop;

import * as React from "react";
import { SVGProps } from "react";

const SvgTabletScreenButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm32 464c0 17.64-14.36 32-32 32H48c-17.64 0-32-14.36-32-32v-96h416v96zm0-112H16V48c0-17.64 14.36-32 32-32h352c17.64 0 32 14.36 32 32v304zM224 464c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.3 32 32 32zm0-48c8.822 0 16 7.176 16 15.1s-7.2 16.9-16 16.9-16-7.176-16-16 7.2-16 16-16z" />
  </svg>
);

export default SvgTabletScreenButton;

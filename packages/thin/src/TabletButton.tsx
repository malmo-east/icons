import * as React from "react";
import { SVGProps } from "react";

const SvgTabletButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm32 464c0 17.64-14.36 32-32 32H48c-17.64 0-32-14.36-32-32V48c0-17.64 14.36-32 32-32h352c17.64 0 32 14.36 32 32v416zm-208-64c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.3-32-32-32zm0 48c-8.822 0-16-7.176-16-16s7.2-16 16-16 16 7.176 16 16-7.2 16-16 16z" />
  </svg>
);

export default SvgTabletButton;

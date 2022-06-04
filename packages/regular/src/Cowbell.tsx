import * as React from "react";
import { SVGProps } from "react";

const SvgCowbell = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M386.6 135.5c-4.1-22.9-24-39.5-47.2-39.5h-18.76V48c0-26.51-21.49-48-48-48h-96.5C149.6 0 128.1 21.49 128.1 48v48h-19.5c-23.19 0-43.09 16.6-47.19 39.5L.495 474.4C-2.835 493.3 11.5 512 32.12 512h383.8c20.65 0 34.95-18.69 31.63-37.63L386.6 135.5zM176 48h96v48h-96V48zM51.14 464l57.5-320h230.8l57.5 320H51.14z" />
  </svg>
);

export default SvgCowbell;

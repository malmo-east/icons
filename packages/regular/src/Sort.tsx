import * as React from "react";
import { SVGProps } from "react";

const SvgSort = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M271.1 288H48.15c-42.62 0-64.24 51.76-33.87 81.9l111.9 112c18.62 18.75 49.12 18.75 67.86 0l111.1-112c29.96-30.1 9.56-81.9-34.04-81.9zM160 448 48.9 336H272L160 448zM48.02 223.1h223.8c42.62 0 64.24-51.76 33.87-81.9L193.9 30.07c-18.62-18.75-49.12-18.75-67.86 0l-111.1 112c-30.9 30.13-9.659 81.03 33.08 81.03zM160 63.97l111.1 112H48.02L160 63.97z" />
  </svg>
);

export default SvgSort;
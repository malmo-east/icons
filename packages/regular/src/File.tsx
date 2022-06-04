import * as React from "react";
import { SVGProps } from "react";

const SvgFile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M0 64C0 28.65 28.65 0 64 0h165.5c17 0 33.2 6.743 45.2 18.75l90.6 90.55c12 12 18.7 28.2 18.7 45.2V448c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64zm336 384V160h-80c-17.7 0-32-14.3-32-32V48H64c-8.84 0-16 7.16-16 16v384c0 8.8 7.16 16 16 16h256c8.8 0 16-7.2 16-16z" />
  </svg>
);

export default SvgFile;

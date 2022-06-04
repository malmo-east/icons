import * as React from "react";
import { SVGProps } from "react";

const SvgSquareParking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M248 320h-64v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V160c0-17.7 14.3-32 32-32h80c53 0 96 42.1 96 96 0 53-43 96-96 96zm0-48c26.5 0 48-21.5 48-48s-21.5-48-48-48h-64v96h64zM0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm48 0v320c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16z" />
  </svg>
);

export default SvgSquareParking;
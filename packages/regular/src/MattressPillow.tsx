import * as React from "react";
import { SVGProps } from "react";

const SvgMattressPillow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M80 176c0-17.7 14.33-32 32-32h64c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32h-64c-17.67 0-32-14.3-32-32V176zM576 64c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h512zm-336 48H64c-8.84 0-16 7.2-16 16v256c0 8.8 7.16 16 16 16h176V112zm48 0v288h288c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H288z" />
  </svg>
);

export default SvgMattressPillow;
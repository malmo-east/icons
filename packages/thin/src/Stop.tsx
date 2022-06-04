import * as React from "react";
import { SVGProps } from "react";

const SvgStop = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 64H64C28.65 64 0 92.65 0 128v255.1c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V128c0-35.35-28.7-64-64-64zm48 320c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V128c0-26.47 21.53-48 48-48h256c26.47 0 48 21.53 48 48v256z" />
  </svg>
);

export default SvgStop;

import * as React from "react";
import { SVGProps } from "react";

const SvgOutdent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M32 64c0-4.42 3.58-8 8-8h432c4.4 0 8 3.58 8 8s-3.6 8-8 8H40c-4.42 0-8-3.58-8-8zm192 128c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8s-3.6 8-8 8H232c-4.4 0-8-3.6-8-8zm248 120c4.4 0 8 3.6 8 8s-3.6 8-8 8H232c-4.4 0-8-3.6-8-8s3.6-8 8-8h240zM32 448c0-4.4 3.58-8 8-8h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-4.42 0-8-3.6-8-8zm101.8-282.4c10.5-9.5 25.3-1.2 25.3 12.3v156.2c0 13.5-14.8 20.9-25.3 12.3l-95.7-78c-6.87-7.3-6.87-18.4 0-24.8l95.7-78zM49.17 256l93.93 78.1V177.9L49.17 256z" />
  </svg>
);

export default SvgOutdent;

import * as React from "react";
import { SVGProps } from "react";

const SvgGem = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m507.9 196.4-104-153.8C399.4 35.95 391.1 32 384 32H127.1c-7.1 0-14.5 3.95-19 10.56L5 196.36c-6.312 9.297-5.281 21.72 2.406 29.89l231.1 246.2C243.1 477.3 249.4 480 256 480s12.94-2.734 17.47-7.547l232-246.2c7.73-8.153 8.73-20.553 2.43-29.853zM382.5 96.59 446.1 192H306l76.5-95.41zM256 178.9 177.6 80h156.7L256 178.9zM129.5 96.59 205.1 192H65.04l64.46-95.41zM256 421 85.42 240h341.2L256 421z" />
  </svg>
);

export default SvgGem;
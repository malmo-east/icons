import * as React from "react";
import { SVGProps } from "react";

const SvgClapperboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm0 16c3.883 0 7.607.588 11.22 1.463L332.7 176H203.3l128-128H448zm-139.3 0-128 128H51.31l128-128H308.7zM16 96c0-26.47 21.53-48 48-48h92.69l-128 128H16V96zm480 320c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V192h480v224zm0-240H355.3L475 56.3c12.7 8.69 21 23.23 21 39.7v80z" />
  </svg>
);

export default SvgClapperboard;

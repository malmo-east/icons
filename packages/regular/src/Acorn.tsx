import * as React from "react";
import { SVGProps } from "react";

const SvgAcorn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M447.1 160c0-53-43-95.96-95.1-95.96l-96.2.002c3.699-7.032 9.035-14.94 17.16-23.07 9.375-9.376 9.375-24.56 0-33.94s-24.56-9.375-33.94 0C218.3 27.79 208.7 48.57 204.2 64.04H96C43.01 64.04.02 107.03.9 160.01L0 192c0 17.67 14.33 32 32 32h16c0 173.9 128.1 233.1 176 256 33.04-16.06 176-70.88 176-255.1l16-.9c17.67 0 32-14.33 32-32l-.9-32zM224 426.6C135.1 383.4 96 302.3 96 224h256c0 74.8-35.3 157.6-128 202.6zM400 176H48l.002-15.98C48.01 133.6 69.54 112 96 112h256c26.46 0 47.99 21.52 48 47.96V176z" />
  </svg>
);

export default SvgAcorn;

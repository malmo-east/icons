import * as React from "react";
import { SVGProps } from "react";

const SvgArrowTurnUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336.1 168.1c-9.375 9.375-24.56 9.375-33.94 0L216 81.94V488c0 13.25-10.75 24-24 24H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h144V81.94L80.97 168.1c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94l128-128C179.7 2.344 185.8 0 192 0s12.28 2.344 16.97 7.031l128 128c9.33 9.369 9.33 24.569-.87 33.069z" />
  </svg>
);

export default SvgArrowTurnUp;
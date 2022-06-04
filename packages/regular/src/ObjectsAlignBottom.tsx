import * as React from "react";
import { SVGProps } from "react";

const SvgObjectsAlignBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M24 512c-13.25 0-24-10.7-24-24s10.75-24 24-24h464c13.3 0 24 10.7 24 24s-10.7 24-24 24H24zm88-128c-26.51 0-48-21.5-48-48V48c0-26.51 21.49-48 48-48h64c26.5 0 48 21.49 48 48v288c0 26.5-21.5 48-48 48h-64zm64-336h-64v288h64V48zm160 336c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48h-64zm64-208h-64v160h64V176z" />
  </svg>
);

export default SvgObjectsAlignBottom;
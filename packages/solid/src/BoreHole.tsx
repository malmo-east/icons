import * as React from "react";
import { SVGProps } from "react";

const SvgBoreHole = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0c17.7 0 32 14.33 32 32v264.6c19.1 11 32 31.7 32 55.4 0 35.3-28.7 64-64 64s-64-28.7-64-64c0-23.7 12.9-44.4 32-55.4V32c0-17.67 14.3-32 32-32zm-96 128v224c0 53 42.1 96 96 96 53 0 96-43 96-96V128h112c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V176c0-26.5 21.49-48 48-48h112z" />
  </svg>
);

export default SvgBoreHole;

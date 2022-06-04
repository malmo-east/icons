import * as React from "react";
import { SVGProps } from "react";

const SvgNote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64.01C28.66 32 .006 60.65.006 96L0 416c0 35.35 28.65 64 64 64h226.7a32.02 32.02 0 0 0 22.63-9.373l125.3-125.3C444.6 339.4 448 331.2 448 322.7V96c0-35.35-28.7-64-64-64zm-80 425.4V360c0-13.23 10.78-24 24-24h97.37L304 457.4zM432 320H328c-22.1 0-40 17.9-40 40v104H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v224z" />
  </svg>
);

export default SvgNote;

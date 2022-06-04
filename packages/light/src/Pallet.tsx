import * as React from "react";
import { SVGProps } from "react";

const SvgPallet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M624 480h-64v-96h64c8.844 0 16-7.156 16-16s-7.2-16-16-16H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h64v96H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h608c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-320 0H112v-96h192v96zm224 0H336v-96h192v96z" />
  </svg>
);

export default SvgPallet;

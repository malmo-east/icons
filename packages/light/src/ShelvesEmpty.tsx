import * as React from "react";
import { SVGProps } from "react";

const SvgShelvesEmpty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M624 0c-8.8 0-16 7.162-16 16v144H32V16c0-8.838-7.16-16-16-16S0 7.162 0 16v480c0 8.8 7.164 16 16 16s16-7.2 16-16v-48h576v48c0 8.836 7.164 16 16 16s16-7.164 16-16V16c0-8.838-7.2-16-16-16zm-16 416H32V192h576v224z" />
  </svg>
);

export default SvgShelvesEmpty;

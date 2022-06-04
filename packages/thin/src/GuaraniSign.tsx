import * as React from "react";
import { SVGProps } from "react";

const SvgGuaraniSign = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M176 8c0-4.418 3.6-8 8-8s8 3.582 8 8v496c0 4.4-3.6 8-8 8s-8-3.6-8-8V8zm16 72C94.8 80 16 158.8 16 256s78.8 176 176 176c94.5 0 171.6-74.5 175.8-168H192v-16h184c4.4 0 8 3.6 8 8 0 106-86 192-192 192C85.96 448 0 362 0 256 0 149.1 85.96 64 192 64c52.3 0 99.8 20.94 134.4 54.9 3.2 2.2 3.2 8.1.1 11.3-3.1 3.2-8.1 3.2-11.3.1C283.4 99.18 239.1 80 191.1 80h.9z" />
  </svg>
);

export default SvgGuaraniSign;

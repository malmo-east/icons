import * as React from "react";
import { SVGProps } from "react";

const SvgCheckToSlot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M480 80c0-26.51-21.5-48-48-48H144c-26.5 0-48 21.49-48 48v304h384V80zm-101.1 86.8-88 112a23.859 23.859 0 0 1-16.53 9.062c-.77-.762-1.67-.762-3.27-.762a23.835 23.835 0 0 1-15.58-5.769l-56-48C190.3 225.6 189.2 210.4 197.8 200.4c8.656-10.06 23.81-11.19 33.84-2.594l36.97 31.69 72.53-92.28c8.188-10.41 23.31-12.22 33.69-4.062C385.3 141.3 387.1 156.4 378.9 166.8zM528 288h-16v112c0 8.836-7.164 16-16 16H80c-8.84 0-16-7.2-16-16V288H48c-26.51 0-48 21.5-48 48v96c0 26.5 21.49 48 48 48h480c26.51 0 48-21.49 48-48v-96c0-26.5-21.5-48-48-48z" />
  </svg>
);

export default SvgCheckToSlot;

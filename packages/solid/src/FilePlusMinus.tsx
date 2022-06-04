import * as React from "react";
import { SVGProps } from "react";

const SvgFilePlusMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 0v128h128L256 0zm-32 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V160H256.9c-18.6 0-32.9-14.3-32.9-32zm32 304H128c-8.844 0-16-7.156-16-16s7.156-16 16-16h128c8.844 0 16 7.156 16 16s-7.2 16-16 16zm16-160c0 8.8-7.2 16-16 16h-48v48c0 8.844-7.156 16-16 16s-16-7.156-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.156 16 16v48h48c8.8 0 16 7.2 16 16z" />
  </svg>
);

export default SvgFilePlusMinus;

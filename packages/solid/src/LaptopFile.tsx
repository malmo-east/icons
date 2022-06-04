import * as React from "react";
import { SVGProps } from "react";

const SvgLaptopFile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M192 96c0 17.7 14.3 32 32 32h96v64h-32c-44.2 0-80 35.8-80 80v112c-20.9 0-38.7 13.4-45.3 32H48c-26.51 0-48-21.5-48-48V48C0 21.49 21.49 0 48 0h144v96zm48 176c0-26.5 21.5-48 48-48h256c26.5 0 48 21.5 48 48v144h32c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64v-16c0-8.8 7.2-16 16-16h32V272zm64 16v128h224V288H304zm16-192h-96V0l96 96z" />
  </svg>
);

export default SvgLaptopFile;

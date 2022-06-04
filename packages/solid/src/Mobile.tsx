import * as React from "react";
import { SVGProps } from "react";

const SvgMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 0H64C37.5 0 16 21.5 16 48v416c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-80 447.1c0 9.7-7.2 16.9-16 16.9h-64.9c-7.9 0-15.1-7.2-15.1-16s7.2-16 16-16h64c8.8 0 16 7.2 16 15.1z" />
  </svg>
);

export default SvgMobile;

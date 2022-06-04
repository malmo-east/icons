import * as React from "react";
import { SVGProps } from "react";

const SvgTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M48 512h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48zM16 48c0-17.64 14.36-32 32-32h352c17.64 0 32 14.36 32 32v416c0 17.64-14.36 32-32 32H48c-17.64 0-32-14.36-32-32V48zm160 408h96c4.406 0 8-3.578 8-8s-3.594-8-8-8h-96c-4.406 0-8 3.578-8 8s3.6 8 8 8z" />
  </svg>
);

export default SvgTablet;

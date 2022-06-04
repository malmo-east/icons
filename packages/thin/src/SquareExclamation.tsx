import * as React from "react";
import { SVGProps } from "react";

const SvgSquareExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 304c4.406 0 8-3.578 8-8V120c0-4.422-3.594-8-8-8s-8 3.6-8 8v176c0 4.4 3.6 8 8 8zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm48 384c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v320zm-208-64c-8.836 0-16 7.164-16 16s7.2 16 16 16 16-7.164 16-16-7.2-16-16-16z" />
  </svg>
);

export default SvgSquareExclamation;

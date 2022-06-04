import * as React from "react";
import { SVGProps } from "react";

const SvgSquareArrowDownLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M317.7 173.7c3.117-3.117 3.127-8.188 0-11.31-3.125-3.129-8.197-3.117-11.31 0L143.1 324.7V184c0-4.422-3.58-8-7.998-8-3.502 0-7.102 3.6-7.102 8v160c0 4.4 3.6 8 8 8h160c4.42 0 8-3.578 8-8a8 8 0 0 0-8-8H155.3l162.4-162.3zM448 416V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.3 0 64-28.7 64-64zm-16 0c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v320z" />
  </svg>
);

export default SvgSquareArrowDownLeft;
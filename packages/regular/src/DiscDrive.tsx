import * as React from "react";
import { SVGProps } from "react";

const SvgDiscDrive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 112c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 176c-17.6 0-32-14.4-32-32s14.38-32 32-32c17.62 0 32 14.38 32 32s-14.4 32-32 32zm232 144h-8V96c0-35.35-28.65-64-64-64H96c-35.35 0-64 28.65-64 64v336h-8.9C10.75 432 0 442.7 0 455.1S10.75 480 23.1 480H488c13.25 0 24-10.75 24-23.1S501.3 432 488 432zm-56 0H80V96c0-8.875 7.125-16 16-16h320c8.875 0 16 7.125 16 16v336z" />
  </svg>
);

export default SvgDiscDrive;
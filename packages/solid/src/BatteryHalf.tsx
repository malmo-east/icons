import * as React from "react";
import { SVGProps } from "react";

const SvgBatteryHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M288 320H96V192h192v128zM0 176c0-44.2 35.82-80 80-80h384c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V176zm80-16c-8.84 0-16 7.2-16 16v160c0 8.8 7.16 16 16 16h384c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H80z" />
  </svg>
);

export default SvgBatteryHalf;

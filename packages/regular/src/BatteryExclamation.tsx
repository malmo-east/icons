import * as React from "react";
import { SVGProps } from "react";

const SvgBatteryExclamation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M80 96h128v48H80c-17.67 0-32 14.3-32 32v160c0 17.7 14.33 32 32 32h113.6c-1 5.2-1.6 10.5-1.6 16 0 11.4 2.4 22.2 6.7 32H80c-44.18 0-80-35.8-80-80V176c0-44.2 35.82-80 80-80zm272 288c0-5.5-.6-10.8-1.6-16H464c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32H336V96h128c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80H345.3c4.3-9.8 6.7-20.6 6.7-32zm-48 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-8-88c0 13.3-10.7 24-24 24s-24-10.7-24-24V120c0-13.3 10.7-24 24-24s24 10.7 24 24v176z" />
  </svg>
);

export default SvgBatteryExclamation;

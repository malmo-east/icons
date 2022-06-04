import * as React from "react";
import { SVGProps } from "react";

const SvgTheta = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 16.01C103.6 16.01 32 123.5 32 256s71.63 240 160 240 160-107.5 160-240S280.4 16.01 192 16.01zM192 32c77.67 0 141 96.21 143.7 216H48.26C51 128.2 114.3 32 192 32zm0 448c-77.67 0-141-96.21-143.7-216h287.5C333 383.8 269.7 480 192 480z" />
  </svg>
);

export default SvgTheta;

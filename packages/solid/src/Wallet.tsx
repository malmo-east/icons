import * as React from "react";
import { SVGProps } from "react";

const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 32c17.7 0 32 14.33 32 32s-14.3 32-32 32H80c-8.84 0-16 7.2-16 16s7.16 16 16 16h368c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zm-32 304c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
  </svg>
);

export default SvgWallet;

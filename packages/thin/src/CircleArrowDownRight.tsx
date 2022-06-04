import * as React from "react";
import { SVGProps } from "react";

const SvgCircleArrowDownRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M344 176a7.996 7.996 0 0 0-7.998 8v140.7L173.7 162.3c-3.115-3.113-8.188-3.129-11.31 0-3.127 3.129-3.117 8.199 0 11.32L324.7 336H184c-4.42 0-8 3.578-8 8s3.6 8 8 8h160c4.42 0 8-3.578 8-8V184c0-4.4-3.6-8-8-8zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleArrowDownRight;

import * as React from "react";
import { SVGProps } from "react";

const SvgClockThree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M248 104c0-4.42 3.6-8 8-8s8 3.58 8 8v144h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H256c-4.4 0-8-3.6-8-8V104zm8-104c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM16 256c0 132.5 107.5 240 240 240s240-107.5 240-240S388.5 16 256 16 16 123.5 16 256z" />
  </svg>
);

export default SvgClockThree;

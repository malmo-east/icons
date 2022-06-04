import * as React from "react";
import { SVGProps } from "react";

const SvgClockThree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M232 120c0-13.3 10.7-24 24-24s24 10.7 24 24v112h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H256c-13.3 0-24-10.7-24-24V120zM256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256z" />
  </svg>
);

export default SvgClockThree;
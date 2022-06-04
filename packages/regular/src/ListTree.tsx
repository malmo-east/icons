import * as React from "react";
import { SVGProps } from "react";

const SvgListTree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M72 48c13.25 0 24 10.75 24 24v48c0 13.3-10.75 24-24 24v88h56c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24H72v104c0 4.4 3.58 8 8 8h48c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24H80c-30.93 0-56-25.1-56-56V144c-13.25 0-24-10.7-24-24V72c0-13.25 10.75-24 24-24h48zm88 48c0-13.25 10.7-24 24-24h304c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24H184c-13.3 0-24-10.7-24-24zm128 160c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H312c-13.3 0-24-10.7-24-24zm0 160c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H312c-13.3 0-24-10.7-24-24z" />
  </svg>
);

export default SvgListTree;

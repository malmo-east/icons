import * as React from "react";
import { SVGProps } from "react";

const SvgClockFourThirty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M264 408c0 4.4-3.6 8-8 8s-8-3.6-8-8V256c0-3 1.6-5.7 4.2-7.1 2.6-1.3 4.9-1.2 8.2.4l96 64c3.7 2.5 4.7 7.5 2.3 11.1-2.5 3.7-7.5 4.7-11.1 2.3L264 270.9V408zm-8 104C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm240-256c0-132.5-107.5-240-240-240S16 123.5 16 256s107.5 240 240 240 240-107.5 240-240z" />
  </svg>
);

export default SvgClockFourThirty;

import * as React from "react";
import { SVGProps } from "react";

const SvgCircleEllipsisVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M240 256c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm32-96c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zm-32 192c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm272-96c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM256 16C123.5 16 16 123.5 16 256s107.5 240 240 240 240-107.5 240-240S388.5 16 256 16z" />
  </svg>
);

export default SvgCircleEllipsisVertical;

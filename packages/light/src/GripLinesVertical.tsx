import * as React from "react";
import { SVGProps } from "react";

const SvgGripLinesVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M48 48v416c0 8.8-7.16 16-16 16s-16-7.2-16-16V48c0-8.84 7.16-16 16-16s16 7.16 16 16zm128 0v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.84 7.2-16 16-16s16 7.16 16 16z" />
  </svg>
);

export default SvgGripLinesVertical;

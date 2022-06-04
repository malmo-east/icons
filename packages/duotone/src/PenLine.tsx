import * as React from "react";
import { SVGProps } from "react";

const SvgPenLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="pen-line_svg__fa-primary"
      d="M182.7 459.2c-6.6 6.6-14.8 11.5-23.8 14.1L30.77 511c-8.42 2.5-17.53.2-23.74-6.9-6.21-5.3-8.532-14.4-6.054-22.9L38.67 353.1c2.65-9 7.5-17.2 14.13-23.8L303 79.03 432.1 208.1 182.7 459.2z"
    />
    <path
      d="M492.7 58.75c25 24.99 25 65.55 0 90.55l-60.6 58.8L303 79.03l59.7-59.71c25-24.998 65.6-24.998 90.6 0l39.4 39.43zM552 464c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24s10.7-24 24-24h304z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPenLine;

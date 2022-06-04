import * as React from "react";
import { SVGProps } from "react";

const SvgGaugeSimpleHigh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="gauge-simple-high_svg__fa-primary"
      d="M338.7 140.9c6.1-11.7 20.6-16.3 32.4-10.2 11.7 6.1 16.3 20.6 10.2 32.4l-76.6 147.3c9.5 11.2 15.3 25.7 15.3 41.6 0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64c2.1 0 4.1.1 6.1.3l76.6-147.4z"
    />
    <path
      d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm-64 352c0 35.3 28.7 64 64 64s64-28.7 64-64c0-15.9-5.8-30.4-15.3-41.6l76.6-147.3c6.1-11.8 1.5-26.3-10.2-32.4-11.8-6.1-26.3-1.5-32.4 10.2l-76.6 147.4c-2-.2-4-1.2-7-1.2-34.4 0-64 29.6-64 64.9h.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGaugeSimpleHigh;

import * as React from "react";
import { SVGProps } from "react";

const SvgClockTenThirty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-ten-thirty_svg__fa-primary"
      d="M232 392V268.8l-85.3-57.7c-11-6.5-14-21.4-6.7-32.4 7.4-11 22.3-14 33.3-6.7l96 64c5.8 4.5 10.7 11.1 10.7 20v136c0 13.3-10.7 24-24.9 24-12.4 0-24-10.7-24-24h.9z"
    />
    <path
      d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm24 256c0-8.9-4.9-15.5-10.7-20l-96-64c-11-7.3-25.9-4.3-33.3 6.7-7.3 11-4.3 25.9 6.7 32.4l85.3 57.7V392c0 13.3 10.7 24 24 24s24-10.7 24-24V256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockTenThirty;

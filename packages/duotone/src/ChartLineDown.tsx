import * as React from "react";
import { SVGProps } from "react";

const SvgChartLineDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="chart-line-down_svg__fa-primary"
      d="m406.6 201.4 32.4-33.3c15.1-14.2 41-3.5 41 17.8v109.2c0 14.2-10.7 24-24 24H345.9c-21.3 0-32.1-25-17.8-40.1l33.3-32.4-57.4-57.3-73.4 73.3c-12.5 12.5-32.7 12.5-45.2 0l-80-80c-12.52-12.5-12.52-32.7 0-45.2 12.5-12.5 32.7-12.5 45.2 0l56.5 57.3 74.3-73.3c12.5-12.5 32.7-12.5 45.2 0l80 80z"
    />
    <path
      d="M32 32c17.67 0 32 14.33 32 32v336c0 8.8 7.16 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.18 0-80-35.8-80-80V64c0-17.67 14.33-32 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChartLineDown;

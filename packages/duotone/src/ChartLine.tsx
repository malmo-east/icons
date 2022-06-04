import * as React from "react";
import { SVGProps } from "react";

const SvgChartLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="chart-line_svg__fa-primary"
      d="M470.6 105.4c12.5 12.5 12.5 32.7 0 45.2l-128 128c-12.5 12.5-32.7 12.5-45.2 0l-58.3-57.3-88.5 89.3c-12.5 12.5-32.7 12.5-45.2 0-12.52-12.5-12.52-32.7 0-45.2l112-112c12.5-12.5 32.7-12.5 45.2 0l57.4 57.3 105.4-105.3c12.5-12.52 32.7-12.52 45.2 0z"
    />
    <path
      d="M32 32c17.67 0 32 14.33 32 32v336c0 8.8 7.16 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.18 0-80-35.8-80-80V64c0-17.67 14.33-32 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChartLine;
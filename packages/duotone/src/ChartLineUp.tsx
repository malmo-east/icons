import * as React from "react";
import { SVGProps } from "react";

const SvgChartLineUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="chart-line-up_svg__fa-primary"
      d="M326.6 326.6c-12.5 12.5-32.7 12.5-45.2 0l-74.3-73.3-56.5 57.3c-12.5 12.5-32.7 12.5-45.2 0-12.52-12.5-12.52-32.7 0-45.2l80-80c12.5-12.5 32.7-12.5 45.2 0l73.4 73.3 57.4-57.3-33.3-33.3c-14.2-14.2-3.5-40.1 17.8-40.1H456c13.3 0 24 10.7 24 24v110.1c0 21.3-25.9 32-41 16.9l-32.4-32.4-80 80z"
    />
    <path
      d="M32 32c17.67 0 32 14.33 32 32v336c0 8.8 7.16 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.18 0-80-35.8-80-80V64c0-17.67 14.33-32 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChartLineUp;

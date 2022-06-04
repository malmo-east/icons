import * as React from "react";
import { SVGProps } from "react";

const SvgChartPyramid = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="chart-pyramid_svg__fa-primary"
      d="M221.4 59.72c15.5-26.46 53.7-26.46 69.2 0l77.1 131.38H144.3l77.1-131.38zM461 352l39.6 67.8c15.6 26.7-3.7 60.2-34.5 60.2H45.93c-30.87 0-50.109-33.5-34.55-60.2L50.95 352H461z"
    />
    <path
      d="M367.7 192 461 352H50.95l93.35-160h223.4z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChartPyramid;

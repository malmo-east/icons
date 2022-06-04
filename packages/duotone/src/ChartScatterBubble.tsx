import * as React from "react";
import { SVGProps } from "react";

const SvgChartScatterBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="chart-scatter-bubble_svg__fa-primary"
      d="M320 128c0-35.35 28.7-64 64-64s64 28.65 64 64c0 35.3-28.7 64-64 64s-64-28.7-64-64zm-32 48c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm0 112c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64zm-160 16c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z"
    />
    <path
      d="M32 32c17.67 0 32 14.33 32 32v336c0 8.8 7.16 16 16 16h400c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.18 0-80-35.8-80-80V64c0-17.67 14.33-32 32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChartScatterBubble;

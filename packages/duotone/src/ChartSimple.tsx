import * as React from "react";
import { SVGProps } from "react";

const SvgChartSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="chart-simple_svg__fa-primary"
      d="M400 96c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h32zM80 224c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V272c0-26.5 21.49-48 48-48h32z"
    />
    <path
      d="M160 80c0-26.51 21.5-48 48-48h32c26.5 0 48 21.49 48 48v352c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChartSimple;

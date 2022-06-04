import * as React from "react";
import { SVGProps } from "react";

const SvgChartPieSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="chart-pie-simple_svg__fa-primary"
      d="M272 16.58C272 7.555 278.1 0 288 0c123.7 0 224 100.3 224 224 0 9-7.6 16-16.6 16H272V16.58z"
    />
    <path
      d="M224 288h238.4c9.2 0 16.6 7.8 15.3 17-16 116.9-116.3 207-237.7 207C107.5 512 0 404.6 0 272 0 150.7 90.06 50.34 206.1 34.25c10.1-1.26 17.9 6.11 17.9 15.36V288z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChartPieSimple;

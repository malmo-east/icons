import * as React from "react";
import { SVGProps } from "react";

const SvgFileChartPie = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="file-chart-pie_svg__fa-primary"
      d="M160 210.6c-69.13 14.12-116.6 87.5-86.5 164.9 11.12 28.75 34.25 51.88 63 63 77.4 30.1 150.8-17.4 164.9-86.5H160V210.6zM256 0v128h128L256 0z"
    />
    <path
      d="M256 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V128H256zM136.5 438.5c-28.75-11.12-51.88-34.25-63-63-30.12-77.4 17.38-150.7 86.5-164.9V352h141.4c-14.1 69.1-87.5 116.6-164.9 86.5zM192 320V199.9c66.38 0 120.1 53.75 120.1 120.1H192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFileChartPie;

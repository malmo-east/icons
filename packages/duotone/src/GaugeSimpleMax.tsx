import * as React from "react";
import { SVGProps } from "react";

const SvgGaugeSimpleMax = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="gauge-simple-max_svg__fa-primary"
      d="M411.4 227.6c11.2-7 26-3.5 33 7.8 7 11.2 3.5 26-7.8 33l-117.5 72.8c.6 3.5.9 7.1.9 10.8 0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64c14.1 0 27.2 4.6 37.8 12.4l117.6-72.8z"
    />
    <path
      d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm-64 352c0 35.3 28.7 64 64 64s64-28.7 64-64c0-3.7-.3-7.3-.9-10.8l117.5-72.8c11.3-7 14.8-21.8 7.8-33-7-11.3-21.8-14.8-33-7.8l-117.6 72.8c-10.6-7.8-23.7-12.4-37.8-12.4-35.3 0-64 28.7-64 64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGaugeSimpleMax;

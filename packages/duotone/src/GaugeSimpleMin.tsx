import * as React from "react";
import { SVGProps } from "react";

const SvgGaugeSimpleMin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="gauge-simple-min_svg__fa-primary"
      d="M218.2 300.4c10.6-7.8 23.7-12.4 37.8-12.4 35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64c0-3.7.3-7.3.9-10.8L75.37 268.4c-11.27-7-14.75-21.8-7.78-33 6.98-11.3 21.77-14.8 33.01-7.8l117.6 72.8z"
    />
    <path
      d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zm-256 32c-14.1 0-27.2 4.6-37.8 12.4l-117.6-72.8c-11.24-7-26.03-3.5-33.01 7.8-6.97 11.2-3.49 26 7.78 33l117.53 72.8c-.6 3.5-.9 7.1-.9 10.8 0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64.9-64-64.9v.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgGaugeSimpleMin;

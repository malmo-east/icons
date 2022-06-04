import * as React from "react";
import { SVGProps } from "react";

const SvgAnglesUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="angles-up_svg__fa-primary"
      d="M352 256c-8.188 0-16.38-3.125-22.62-9.375L192 109.3 54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25-6.23 6.3-14.43 9.4-22.63 9.4z"
    />
    <path
      d="M352 448c-8.188 0-16.38-3.125-22.62-9.375L192 301.3 54.6 438.7c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25-6.2 6.2-14.4 9.3-22.6 9.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAnglesUp;

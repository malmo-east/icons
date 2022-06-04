import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="arrow-up_svg__fa-primary"
      d="M352 256c-8.188 0-16.38-3.125-22.62-9.375L192 109.3 54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25-6.23 6.3-14.43 9.4-22.63 9.4z"
    />
    <path
      d="M224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3l32-32 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowUp;

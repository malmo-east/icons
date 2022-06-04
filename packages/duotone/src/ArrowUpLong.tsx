import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpLong = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path
      className="arrow-up-long_svg__fa-primary"
      d="M288 192c-8.188 0-16.38-3.125-22.62-9.375L160 77.25 54.63 182.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l128-128c12.5-12.5 32.75-12.5 45.25 0l128 128c12.5 12.5 12.5 32.75 0 45.25-6.23 6.3-14.43 9.4-22.63 9.4z"
    />
    <path
      d="M192 109.3V480c0 17.69-14.31 32-32 32s-32-14.31-32-32V109.3l32-32 32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgArrowUpLong;

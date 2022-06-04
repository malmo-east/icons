import * as React from "react";
import { SVGProps } from "react";

const SvgChevronsUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="chevrons-up_svg__fa-primary"
      d="M416 288c-8.188 0-16.38-3.125-22.62-9.375L224 109.3 54.63 278.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25-6.23 6.3-14.43 9.4-22.63 9.4z"
    />
    <path
      d="M416 480c-8.188 0-16.38-3.125-22.62-9.375L224 301.3 54.6 470.7c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25-6.2 6.2-14.4 9.3-22.6 9.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgChevronsUp;

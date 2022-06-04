import * as React from "react";
import { SVGProps } from "react";

const SvgCupTogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="cup-togo_svg__fa-primary"
      d="M432 64h-16l-23.12-46.25C387.4 6.875 376.4 0 364.3 0H83.8C71.63 0 60.63 6.875 55.13 17.75L32 64H16C7.125 64 0 71.13 0 80v32c0 8.9 7.125 16 16 16h416c8.9 0 16-7.1 16-16V80c0-8.87-7.1-16-16-16zM69.32 416h309.4l13.33-160H55.1l14.22 160z"
    />
    <path
      d="M74.88 482.6c1.37 16.7 15.25 29.4 31.92 29.4h234.5c16.62 0 30.5-12.75 31.88-29.38L378.7 416H69.32l5.56 66.6zM45.33 128l10.66 128h336l10.66-128H45.33z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCupTogo;

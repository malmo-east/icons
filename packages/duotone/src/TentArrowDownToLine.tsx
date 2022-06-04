import * as React from "react";
import { SVGProps } from "react";

const SvgTentArrowDownToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="tent-arrow-down-to-line_svg__fa-primary"
      d="M160.1 217.8c-9.2 8.3-23 8.3-32.2 0l-79.96-72c-9.85-9.7-10.65-24-1.78-33.9 8.87-9.8 24.04-10.6 33.89-1.7l39.05 35.9V24c0-13.25 11.6-24 24-24 14.2 0 24 10.75 24 24v122.1l40.8-35.9c9.9-8.9 24.2-8.1 33.9 1.7 8.9 9.9 8.1 24.2-1.7 33.9l-80 72zM608 448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h576z"
    />
    <path
      d="M571.4 262.5c6.6 5.1 11 12.5 12.2 20.8L608.4 448H460.8L384 320v128H159.6l24.8-164.7c1.2-8.3 4.7-15.7 12.2-20.8l168-128c11.5-8.7 27.3-8.7 38.8 0l168 128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTentArrowDownToLine;

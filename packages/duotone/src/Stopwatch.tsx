import * as React from "react";
import { SVGProps } from "react";

const SvgStopwatch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="stopwatch_svg__fa-primary"
      d="M144 32c0-17.67 14.3-32 32-32h96c17.7 0 32 14.33 32 32s-14.3 32-32 32h-16v34.45A209.2 209.2 0 0 0 224 96c-10.9 0-21.6.84-32 2.45V64h-16c-17.7 0-32-14.33-32-32zm233.4 89.4c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2l-24.1 24.2c-11.7-18.1-26.2-34.2-42.8-47.8l21.7-21.6zM248 320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24v128z"
    />
    <path
      d="M16 304c0-114.9 93.1-208 208-208s208 93.1 208 208-93.1 208-208 208S16 418.9 16 304zm232-112c0-13.3-10.7-24-24-24s-24 10.7-24 24v128c0 13.3 10.7 24 24 24s24-10.7 24-24V192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgStopwatch;

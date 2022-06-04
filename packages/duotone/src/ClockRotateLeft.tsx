import * as React from "react";
import { SVGProps } from "react";

const SvgClockRotateLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-rotate-left_svg__fa-primary"
      d="M256 128c13.3 0 24 10.7 24 24v94.1l64.1 64.9c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-72-72c-4.5-3.6-7-9.7-7-16.1V152c0-13.3 10.7-24 24-24z"
    />
    <path
      d="M151 151c15.1 15.1 4.4 41-16.9 41H24c-13.25 0-24-10.7-24-24V57.94c0-21.38 25.85-32.09 40.97-16.97l34.01 34.01C121.3 28.69 185.3 0 255.1 0 397.4 0 512 114.6 512 256S397.4 512 255.1 512c-53.4 0-103.9-17-145.4-45.9-14.5-11-18.06-30.1-7.9-44.6 10.1-14.5 30-18 44.5-7.9 31.1 21.7 68.9 34.4 108.8 34.4C362 448 448 362 448 256c0-106.9-86-192-192.9-192-53 0-100.1 21.46-134.9 56.2L151 151z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockRotateLeft;

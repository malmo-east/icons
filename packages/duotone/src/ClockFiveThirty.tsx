import * as React from "react";
import { SVGProps } from "react";

const SvgClockFiveThirty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-five-thirty_svg__fa-primary"
      d="M232 392V256c0-10.6 6.9-19.9 17-23 10.2-3.9 21.1.9 26.1 9.7l64 96c8.2 11 5.2 25.9-5.8 32.4-11 8.2-25.9 5.2-33.3-5.8l-20-30V392c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
    />
    <path
      d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm24 335.3 20 30c7.4 11 22.3 14 33.3 5.8 11-6.5 14-21.4 5.8-32.4l-64-96c-5-8.8-15.9-13.6-26.1-9.7-10.1 3.1-17.9 12.4-17.9 23v136c0 13.3 11.6 24 24 24 14.2 0 24.9-10.7 24.9-24v-56.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockFiveThirty;
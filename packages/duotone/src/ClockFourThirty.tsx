import * as React from "react";
import { SVGProps } from "react";

const SvgClockFourThirty = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock-four-thirty_svg__fa-primary"
      d="M232 392V256c0-8.9 4.9-17 12.7-21.2 7.8-4.1 17.2-3.7 24.6 1.2l96 64c11 7.4 14 22.3 5.8 33.3-6.5 11-21.4 14-32.4 5.8L280 300.8V392c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
    />
    <path
      d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm24 300.8 58.7 38.3c11 8.2 25.9 5.2 32.4-5.8 8.2-11 5.2-25.9-5.8-33.3l-96-64c-7.4-4.9-16.8-5.3-24.6-1.2-7.8 4.2-13.6 12.3-13.6 21.2v136c0 13.3 11.6 24 24 24 14.2 0 24.9-10.7 24.9-24v-91.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClockFourThirty;

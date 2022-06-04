import * as React from "react";
import { SVGProps } from "react";

const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="clock_svg__fa-primary"
      d="M280 120v123.2l85.3 56.8c11 7.4 14 22.3 5.8 33.3-6.5 11-21.4 14-32.4 5.8l-96-64C236 271.5 232 264 232 256V120c0-13.3 10.7-24 24-24s24 10.7 24 24z"
    />
    <path
      d="M256 512C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256-114.6 256-256 256zm-24-256c0 8 4 15.5 10.7 19.1l96 64c11 8.2 25.9 5.2 32.4-5.8 8.2-11 5.2-25.9-5.8-33.3L280 243.2V120c0-13.3-10.7-24-24.9-24-12.4 0-24 10.7-24 24l.9 136z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgClock;

import * as React from "react";
import { SVGProps } from "react";

const SvgBalloons = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="balloons_svg__fa-primary"
      d="M195.3 370.8C244 329.1 320 238.1 320 168 320 75.21 248.4 0 160 0S0 75.21 0 168c0 70.07 75.99 161.1 124.7 202.8l-27.02 54.04a16.036 16.036 0 0 0 .688 15.56C101.3 445.1 106.5 448 112 448h96c5.531 0 10.69-2.875 13.62-7.594a16.038 16.038 0 0 0 .688-15.56L195.3 370.8zM144 96c-26.5 0-48 21.5-48 48 0 8.8-7.16 16-16 16s-16-7.2-16-16c0-44.12 35.88-80 80-80 8.8 0 16 7.16 16 16s-7.2 16-16 16z"
    />
    <path
      d="M515.3 434.8C564 393.1 640 302.1 640 232c0-92.8-71.6-168-160-168-54.14 0-101.8 28.41-130.8 71.62 1.7 10.58 2.8 20.48 2.8 32.38 0 31.86-12.03 64.75-27.65 94.08 16.38 64.44 78.47 137.5 120.4 172.7l-27.05 54.11a16.036 16.036 0 0 0 .688 15.56C421.3 509.1 426.5 512 432 512h96c5.531 0 10.69-2.875 13.62-7.594a16.038 16.038 0 0 0 .688-15.56L515.3 434.8zM464 160c-26.5 0-48 21.5-48 48 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.1 35.9-80 80-80 8.8 0 16 7.2 16 16s-7.2 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBalloons;
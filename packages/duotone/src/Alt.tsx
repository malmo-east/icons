import * as React from "react";
import { SVGProps } from "react";

const SvgAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="alt_svg__fa-primary"
      d="M608 128H463.4L217 436c-6.1 7.6-15.3 12-25 12H32c-17.69 0-32-14.31-32-32s14.31-32 32-32h144.6L423 76c6.1-7.59 15.3-12 25-12h160c17.69 0 32 14.31 32 32s-14.3 32-32 32z"
    />
    <path
      d="M416 416c0 17.69 14.31 32 32 32h160c17.69 0 32-14.31 32-32s-14.31-32-32-32H448c-17.7 0-32 14.3-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAlt;

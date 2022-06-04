import * as React from "react";
import { SVGProps } from "react";

const SvgPersonCarryBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="person-carry-box_svg__fa-primary"
      d="M0 479.9C0 497.65 14.25 511 32 511s32-14.2 32-31.95v-74.54C48 390.89.62 349.88 0 349.38V479.9zm118.1-208.8c6.4 10.4 17.3 16 29.1 16H192V224h-25.4l-33.3-61.8c-11-21.1-32.8-35.1-56.55-35.1H48c-26.51 0-48 21.49-48 48v102.1c0 18.75 8.25 36.38 22.38 48.62l76 65.13 14.12 92.5c1 5.625 10.12 30.62 36.75 26.25 17.5-2.875 29.25-19.37 26.38-36.75l-14.12-92.5C159 367.4 151.4 353.9 140 344.1l-44-37.7v-78.3l22.1 43z"
    />
    <path
      d="M80 0C53.5 0 32 21.5 32 47.1c0 27.4 21.5 48 48 48s48-20.6 48-48C128 21.5 106.5 0 80 0zm272 95.1H224c-17.6 0-32 14.4-32 32v159.1l160 .002c17.6 0 32-14.4 32-32V127.1c0-16.7-14.4-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPersonCarryBox;

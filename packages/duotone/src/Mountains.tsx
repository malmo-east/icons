import * as React from "react";
import { SVGProps } from "react";

const SvgMountains = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="mountains_svg__fa-primary"
      d="M0 424.1c0-10.5 2.964-20.8 8.551-29.7L225.3 49.01C231.9 38.42 243.5 32 256 32s24.1 6.42 30.8 17.01L503.4 394.4c5.6 8.9 8.6 19.2 8.6 29.7 0 30-25.9 55.9-55.9 55.9H55.91C25.03 480 .001 454.1.001 424.1H0z"
    />
    <path
      d="m412.7 249.7 48.2-79c3.2-6.6 11.3-10.7 19.1-10.7 7.8 0 15 4.1 19.1 10.7l132 216.4c5.8 9.5 8.9 20.6 8.9 31.8 0 33.7-27.4 61.1-61.1 61.1H456.1c30 0 55.9-25.9 55.9-55.9 0-10.5-3-20.8-8.6-29.7l-90.7-144.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMountains;

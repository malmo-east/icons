import * as React from "react";
import { SVGProps } from "react";

const SvgShuttleSpace = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="shuttle-space_svg__fa-primary"
      d="M0 168c0-22.1 17.91-40 40-40h64c26.2 0 49.4 12.6 64 32h288c69.3 0 135 22.7 179.2 81.6 6.4 8.5 6.4 20.3 0 28.8C591 329.3 525.3 352 456 352H168c-14.6 19.4-37.8 32-64 32H40c-22.09 0-40-17.9-40-40V168zm512 100.4v-24.8c0-19.7-15.9-35.6-35.6-35.6-3.3 0-4.4 1.1-4.4 4.4v87.2c0 2.4 1.1 4.4 4.4 4.4 19.7 0 35.6-15.9 35.6-35.6z"
    />
    <path
      d="M96 128H32V80c0-26.51 21.49-48 48-48h16v96zm0 352H80c-26.51 0-48-21.5-48-48v-48h64v96zm32 0v-99.7c16.1-5 30.1-15.1 40-28.3h237.3l-160.1 96.1c-34.8 20-74.6 31.9-116.1 31.9H128zm0-348.3V32h1.1c41.5 0 81.3 11.03 116.1 31.92L405.3 160H168c-9.9-13.2-23.9-23.3-40.9-28.3h.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShuttleSpace;

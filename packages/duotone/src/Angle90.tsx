import * as React from "react";
import { SVGProps } from "react";

const SvgAngle90 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="angle-90_svg__fa-primary"
      d="M416 416H64V63.1C64 46.33 49.67 32 32 32S0 46.33 0 63.1V448c0 17.67 14.33 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32z"
    />
    <path
      d="m322.3 279.7-41.1 24.66c14.2 24.54 24.9 51.24 31.4 79.64h49.13c-7.23-37.4-20.83-72.5-39.43-104.3zM96 167.4c28.39 6.477 55.15 17.16 79.68 31.36l24.66-41.1C168.5 139.1 133.4 125.5 96 118.3v49.1zm131.2 7.7-24.8 41.3a290.028 290.028 0 0 1 61.19 61.19l41.31-24.79c-21.5-30-47.7-56.2-77.7-77.7z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgAngle90;

import * as React from "react";
import { SVGProps } from "react";

const SvgTruckRampBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="truck-ramp-box_svg__fa-primary"
      d="M544 288c-66.1 0-120.6 50.2-127.3 114.5L48.41 502.9c-17.05 4.6-34.64-5.4-39.284-22.5-4.646-17 5.414-34.6 22.464-39.3L352 353.8V64c0-35.35 28.7-64 64-64h224v331.3c-23.5-26.5-57.8-43.3-96-43.3zm-369.4-71.2c2.3 8.5-2.8 17.3-11.3 19.6l-30.9 8.3c-8.5 1.4-17.3-2.8-19.6-11.3l-20.7-77.3 61.8-16.6 20.7 77.3z"
    />
    <path
      d="M23.11 207.7c-4.57-17.1 5.56-34.6 22.63-39.2l154.56-41.4c17.1-4.6 34.6 5.6 39.2 22.6l41.4 154.6c4.6 17.1-5.6 34.6-22.6 39.2l-154.6 41.4c-17.06 4.6-34.6-5.6-39.18-22.6L23.11 207.7zm89.69 25.7c2.3 8.5 11.1 12.7 19.6 11.3l30.9-8.3c8.5-2.3 13.6-11.1 11.3-19.6l-20.7-77.3-61.8 16.6 20.7 77.3zM448 416c0-53.9 42.1-96 96-96 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTruckRampBox;
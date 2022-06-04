import * as React from "react";
import { SVGProps } from "react";

const SvgTemperatureQuarter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M240 322.5V80C240 35.82 204.18.9 160.9.9S80 35.82 80 80v242.5c-19.58 20.13-32 47.21-32 77.51 0 61.86 50.14 112 112 112S272 461.9 272 400c0-30.3-12.4-57.4-32-77.5zM160 496c-52.94 0-96-43.07-96-96 0-24.57 9.756-48.14 27.47-66.35L96 328.1V80c0-35.29 28.71-64 64-64s64 28.71 64 64v248.1l4.529 4.658C246.2 351.9 256 375.4 256 400c0 52.9-43.1 96-96 96zm8-143.2V264c0-4.422-3.594-7.1-7.1-7.1s-8.9 2.7-8.9 7.1v88.81c-22.7 3.79-40 23.39-40 47.19 0 26.51 21.49 48 48 48s48-21.5 48-48c0-23.8-17.3-43.4-40-47.2zm-8 79.2c-17.6 0-32-14.4-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32z" />
  </svg>
);

export default SvgTemperatureQuarter;

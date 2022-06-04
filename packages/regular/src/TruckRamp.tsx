import * as React from "react";
import { SVGProps } from "react";

const SvgTruckRamp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M616 0c13.3 0 24 10.75 24 24 0 13.26-10.7 24-24 24H440c-22.1 0-40 17.91-40 40v272.7l25.7-7 .3-.1c17.7-38.7 56.7-65.6 102-65.6 61.9 0 112 50.1 112 112s-50.1 112-112 112c-59.8 0-108.7-46.9-111.8-106L30.31 511.2c-12.79 3.4-25.981-4.1-29.466-16.9-3.484-12.8 4.058-26 16.846-29.5l334.31-91V88c0-48.6 39.4-88 88-88h176zm-88 464c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z" />
  </svg>
);

export default SvgTruckRamp;

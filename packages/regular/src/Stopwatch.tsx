import * as React from "react";
import { SVGProps } from "react";

const SvgStopwatch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M248 320c0 13.3-10.7 24-24 24s-24-10.7-24-24V216c0-13.3 10.7-24 24-24s24 10.7 24 24v104zM144 24c0-13.25 10.7-24 24-24h112c13.3 0 24 10.75 24 24s-10.7 24-24 24h-32v49.37c43.4 5.03 82.8 23.33 113.8 50.83L391 119c9.4-9.3 24.6-9.3 33.1 0 10.2 9.4 10.2 24.6 0 33.1L393.9 184c24 33.9 38.1 75.3 38.1 120 0 114.9-93.1 208-208 208S16 418.9 16 304c0-106.8 80.43-194.7 184-206.63V48h-32c-13.3 0-24-10.75-24-24zm80 440c88.4 0 160-71.6 160-160s-71.6-160-160-160S64 215.6 64 304s71.6 160 160 160z" />
  </svg>
);

export default SvgStopwatch;

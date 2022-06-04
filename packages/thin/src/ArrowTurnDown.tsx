import * as React from "react";
import { SVGProps } from "react";

const SvgArrowTurnDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M349.5 365.8 198.4 508.9c-3.062 2.937-7.937 2.937-10.1 0L37.2 365.8c-3.219-3.031-3.344-8.094-.312-11.31 3.062-3.187 8.125-3.344 11.31-.313l138.5 131.2V71.1c0-30.87-25.12-55.1-55.1-55.1H8c-4.406 0-7.1-3.594-7.1-7.1S3.595 0 8.001 0h119.1c39.69 0 71.1 32.31 71.1 71.1v413.4l138.5-131.2c1.531-1.469 3.531-2.187 5.5-2.187 2.125 0 4.25.844 5.812 2.5C352.8 357.7 352.7 362.8 349.5 365.8z" />
  </svg>
);

export default SvgArrowTurnDown;

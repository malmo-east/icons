import * as React from "react";
import { SVGProps } from "react";

const SvgLandmarkFlag = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 0c8.8 0 16 7.164 16 16v64c0 8.84-7.2 16-16 16h-80v32h192c13.3 0 24 10.7 24 24s-10.7 24-24 24H48c-13.25 0-24-10.7-24-24s10.75-24 24-24h192V16c0-8.836 7.2-16 16-16h96zM112 384h64V208h48v176h64V208h48v176h64V208h48v176h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.25 0-24-10.7-24-24s10.75-24 24-24h8V208h48v176zM0 488c0-13.3 10.75-24 24-24h464c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.25 0-24-10.7-24-24z" />
  </svg>
);

export default SvgLandmarkFlag;

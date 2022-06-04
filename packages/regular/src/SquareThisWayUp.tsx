import * as React from "react";
import { SVGProps } from "react";

const SvgSquareThisWayUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M328 352c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h208zm0-160v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V192h-25.5c-8 0-14.5-6.5-14.5-14.5 0-4.4 1.3-7 3.7-9.6l42.5-48.8c4.6-4.2 11-7.1 17.8-7.1 6.8 0 13.2 2.9 17.8 7.1l42.5 48.8c2.4 2.6 3.7 5.2 3.7 9.6 0 8-6.5 14.5-14.5 14.5H328zM83.66 167.9l42.54-48.8c4.6-4.2 11-7.1 17.8-7.1 6.8 0 13.2 2.9 17.8 7.1l42.5 48.8c2.4 2.6 3.7 5.2 3.7 9.6 0 8-6.5 14.5-14.5 14.5H168v104c0 13.3-10.7 24-24 24s-24-10.7-24-24V192H94.49c-8 0-14.49-6.5-14.49-14.5 0-4.4 1.3-7 3.66-9.6zM0 96c0-35.35 28.65-64 64-64h320c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96zm48 0v320c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16H64c-8.84 0-16 7.16-16 16z" />
  </svg>
);

export default SvgSquareThisWayUp;
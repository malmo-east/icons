import * as React from "react";
import { SVGProps } from "react";

const SvgRectangleHistory = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 448c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V224c0-35.3 28.65-64 64-64h384c35.3 0 64 28.7 64 64v224zM440 80c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24H72c-13.25 0-24-10.7-24-24 0-13.25 10.75-24 24-24h368zM392 0c13.3 0 24 10.75 24 24s-10.7 24-24 24H120c-13.3 0-24-10.75-24-24s10.7-24 24-24h272z" />
  </svg>
);

export default SvgRectangleHistory;

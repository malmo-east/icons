import * as React from "react";
import { SVGProps } from "react";

const SvgCalculator = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 344c13.26 0 24-10.75 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm0-88c13.26 0 24-10.75 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm88 88c13.26 0 24-10.75 24-24s-10.74-24-24-24-24 10.7-24 24 10.7 24 24 24zm0-88c13.26 0 24-10.75 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm0 176c13.26 0 24-10.75 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24zm-176 0h80c13.26 0 24-10.75 24-24s-10.7-24-24-24h-80c-13.26 0-24 10.75-24 24s10.74 24 24 24zM320 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm16 448c0 8.836-7.164 16-16 16H64c-8.836 0-16-7.164-16-16V176h288v272zm0-320H48V64c0-8.838 7.164-16 16-16h256c8.836 0 16 7.162 16 16v64zM104 256c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.74 24 24 24zm0 88c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.74 24 24 24z" />
  </svg>
);

export default SvgCalculator;
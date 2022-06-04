import * as React from "react";
import { SVGProps } from "react";

const SvgAngle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M63.53 432H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-8.39 0-16.163-4.4-20.515-11.5-4.352-7.2-4.647-16.1-.778-23.6L210.7 44.93c6.1-11.76 20.6-16.34 32.4-10.22 11.7 6.11 16.3 20.6 10.2 32.36L63.53 432zM241.1 175.5c27.4 19.6 50.8 44.7 70.4 71.9l-40.8 25.5c-15.6-20.1-32-38.2-51.3-54l21.7-43.4zM322.7 392c-5.3-27.6-14.4-53.9-26.8-78.2l40.8-25.6c16.8 32 28.7 66.9 34.8 103.8h-48.8z" />
  </svg>
);

export default SvgAngle;
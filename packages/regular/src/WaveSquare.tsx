import * as React from "react";
import { SVGProps } from "react";

const SvgWaveSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M440 480h-80c-35.2 0-64-28.8-64-64V96c0-8.837-7.163-16-16-16h-80c-8.837 0-16 7.163-16 16v152c0 17.6-14.4 32-32 32H24c-13.2 0-24-10.8-24-24s10.8-24 23.1-24H136V96c0-35.2 28.8-64 64-64h80c35.2 0 64 28.8 64 64v320c0 8.837 7.163 16 16 16h80c8.837 0 16-7.163 16-16V264c0-17.6 14.4-32 32-32h128c13.2 0 24 10.8 24 24s-10.8 24-24 24H504v136c0 35.2-28.8 64-64 64z" />
  </svg>
);

export default SvgWaveSquare;
import * as React from "react";
import { SVGProps } from "react";

const SvgTrainSubwayTunnel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M16 504c0 4.4-3.58 8-8 8-4.418 0-8-3.6-8-8V256C0 114.6 114.6 0 256 0s256 114.6 256 256v248c0 4.4-3.6 8-8 8s-8-3.6-8-8V256c0-132.5-107.5-240-240-240S16 123.5 16 256v248zm144-136c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm192 0c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zm-32-176c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h128zm-128 16c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h56v-96h-56zm72 0v96h56c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-56zm-152 0c0-44.2 35.8-80 80-80h128c44.2 0 80 35.8 80 80v160c0 38.2-26.8 70.2-62.6 78.1l52.3 52.2c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0L316.7 448H195.3l-61.6 61.7a8.15 8.15 0 0 1-11.4 0 8.15 8.15 0 0 1 0-11.4l52.3-52.2c-35.8-7.9-62.6-39.9-62.6-78.1V208zm16 0v160c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V208c0-35.3-28.7-64-64-64H192c-35.3 0-64 28.7-64 64z" />
  </svg>
);

export default SvgTrainSubwayTunnel;
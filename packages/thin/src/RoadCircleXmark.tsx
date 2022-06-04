import * as React from "react";
import { SVGProps } from "react";

const SvgRoadCircleXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M422.6 32c23.4 0 43.5 14.58 52.5 36.55l46.4 125.25c-5.8-1.7-11.7-1.4-17.7-1.6L460.1 74.11C454.3 58.42 439.3 48 422.6 48H328v56c0 4.4-3.6 8-8.9 8-3.5 0-8-3.6-8-8V48h-93.7c-16.7 0-31.7 10.42-37.5 26.11L55.45 410.1C45.78 436.2 65.1 464 92.96 464H311.1v-56c0-4.4 4.5-8 8-8 2 0 3 .2 3.9.6 1.3 6.8 2.1 13.5 5 20V464h20.5c3.6 5.6 7.5 10.9 11.7 16H92.96c-39 0-66.06-38.9-52.51-75.4L164.9 68.55C173 46.58 193.1 32 217.4 32h205.2zM328 312c0 4.4-3.6 8-8 8s-8-3.6-8-8V200c0-4.4 3.6-8 8-8s8 3.6 8 8v112zm229.7 106.3c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0L496 379.3l-50.3 50.4a8.15 8.15 0 0 1-11.4 0 8.15 8.15 0 0 1 0-11.4l50.4-50.3-50.4-50.3a8.15 8.15 0 0 1 0-11.4c3.2-3.1 8.2-3.1 11.4 0l50.3 50.4 50.3-50.4c3.2-3.1 8.2-3.1 11.4 0 3.1 3.2 3.1 8.2 0 11.4L507.3 368l50.4 50.3zM640 368c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zM496 240c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128z" />
  </svg>
);

export default SvgRoadCircleXmark;

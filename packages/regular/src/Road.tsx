import * as React from "react";
import { SVGProps } from "react";

const SvgRoad = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M312 296c0 13.3-10.7 24-24.9 24-12.4 0-24-10.7-24-24v-80c0-13.3 11.6-24 24-24 14.2 0 24.9 10.7 24.9 24v80zm78.3-264c30.3 0 57.4 19.05 67.7 47.61L567.4 383.6c16.9 46.9-17.8 96.4-67.7 96.4H76.3c-49.87 0-84.639-49.5-67.748-96.4L117.1 79.61C128.3 51.05 155.4 32 185.7 32h204.6zM53.71 399.9C48.08 415.5 59.67 432 76.3 432h186.8v-24c0-13.3 11.6-24 24-24 14.2 0 24.9 10.7 24.9 24v24h187.7c16.6 0 28.2-16.5 22.6-32.1L412.8 95.87A23.89 23.89 0 0 0 390.3 80H312v24c0 13.3-10.7 24-24.9 24-12.4 0-24-10.7-24-24V80h-77.4c-10.1 0-19.1 6.35-22.5 15.87L53.71 399.9z" />
  </svg>
);

export default SvgRoad;
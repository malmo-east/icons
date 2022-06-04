import * as React from "react";
import { SVGProps } from "react";

const SvgH2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M296 64c-13.2 0-24 10.75-24 24v136H48V88c0-13.25-10.75-24-24-24S0 74.75 0 88v336c0 13.3 10.75 24 24 24s24-10.75 24-24V272h224v152c0 13.3 10.8 24 24 24s24-10.7 24-24V88c0-13.25-10.7-24-24-24zm320 336.2H453.8l125.7-114.8c51.39-45.5 57.39-122.7 13.64-175.7-21.81-26.44-52.56-42.47-86.58-45.13-34-2.562-66.73 8.344-92.33 30.94l-25.66 22.66c-9.938 8.781-10.88 23.94-2.094 33.88 8.766 9.938 23.94 10.91 33.88 2.125l25.66-22.69c15.77-13.91 36.2-20.59 56.78-19.06 20.94 1.656 39.88 11.53 53.33 27.84 26.73 32.41 22.95 81.38-8.719 109.4l-171.6 156.8a24.02 24.02 0 0 0-6.188 26.41 24.01 24.01 0 0 0 22.38 15.31h224c13.25 0 24-10.75 24-24S629.3 400.2 616 400.2z" />
  </svg>
);

export default SvgH2;
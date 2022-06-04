import * as React from "react";
import { SVGProps } from "react";

const SvgTemperatureSun = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M160 240c0 52.88 43.13 96 96 96s96-43.13 96-96-43.13-96-96-96-96 43.1-96 96zm160 0c0 35.25-28.75 64-64 64s-64-28.75-64-64 28.75-64 64-64 64 28.8 64 64zm64-140.01c0-9.992-9.133-17.8-18.93-15.86l-48.47 9.62-47.3-70.63c-6-8.875-20.5-8.875-26.5 0l-47.4 70.63-83.25-16.5c-5.375-1.125-10.75.5-14.38 4.375C93.88 85.38 92.25 90.75 93.25 96l16.5 83.38-70.62 47.42c-4.38 3-7.13 8-7.13 13.2s2.75 10.25 7.125 13.25l70.63 47.38L93.25 384c-1 5.25.625 10.75 4.5 14.38 3.75 3.875 9 5.5 14.38 4.375l83.25-16.5L242.8 457c3 4.5 8 7.125 13.25 7.125s10.25-2.75 13.25-7.125l47.38-70.75 19.12 3.785c8.793 1.74 17.15-4.17 18.62-13.01 1.416-8.424-4.037-16.74-12.42-18.4l-29.7-5.875c-6.5-1.375-12.75 1.5-16.38 6.875L256 419.3l-39.9-59.8c-3.625-5.375-10-8.25-16.38-6.75l-70.5 14 14-70.5a15.879 15.879 0 0 0-6.746-16.29L76.75 240l59.67-39.82a16.032 16.032 0 0 0 6.83-16.43l-13.88-70.5 70.38 14c6.5 1.375 12.88-1.375 16.5-6.75L256 60.75l39.9 59.75c3.6 5.4 9.9 8.1 16.4 6.8l58.99-11.72C378.7 114.1 384 107.6 384 99.99zM512 354.9V80c0-8.75-7.3-16-16.9-16S480 71.25 480 80v274.9c-18.6 6.6-32 24.2-32 45.1 0 26.5 21.5 48 47.1 48s48.9-21.5 48.9-48c0-20.9-13.4-38.5-32-45.1zm64-33V80c0-44.12-35.9-80-80.9-80S416 35.88 416 80v241.9c-20.2 20.9-32 48.9-32 78.1 0 61.75 50.25 112 111.1 112S608 461.8 608 400c0-29.2-11.7-57.4-32-78.1zM496 480c-44.13 0-80-35.88-80-80 0-25.5 12.25-48.88 32-63.75V80c0-26.5 21.5-48 48-48s48 21.5 48 48v256.3c19.8 14.7 32 38.2 32 63.7 0 44.1-35.9 80-80 80z" />
  </svg>
);

export default SvgTemperatureSun;

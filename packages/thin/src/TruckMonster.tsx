import * as React from "react";
import { SVGProps } from "react";

const SvgTruckMonster = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M88 128h136V32c0-17.67 14.3-32 32-32h112.8c12 0 23.4 5.428 31 14.78l92 113.22H552c30.9 0 56 25.1 56 56v67.8c1.1 1.9 3.9 3.9 5.8 5.9 3.1 3.2 2.9 7.4-.3 11.3-3.2 3.1-8.3 2.9-11.3-.3C571.5 236.2 528.1 216 480 216c-59 0-110.8 30.4-140.8 76.4-1.5 2.2-4 3.6-6.7 3.6h-25c-2.7 0-5.2-1.4-6.7-3.6-30-46-82.7-76.4-140.8-76.4-48.1 0-91.54 20.2-122.18 52.7-3.04 3.2-8.1 3.4-11.31.3-3.21-3.9-3.36-8.1-.33-11.3 1.9-2 3.84-4 5.82-5.9V184c0-30.9 25.07-56 56-56zM256 16c-8.8 0-16 7.16-16 16v96h231.2L387.4 24.87c-4.6-5.61-12.3-8.87-18.6-8.87H256zM48 238c31.02-23.8 69.9-38 112-38 63 0 118.7 31.7 151.8 80h16.4c33.1-48.3 87.9-80 151.8-80 42.1 0 80.1 14.2 112 38v-54c0-22.1-17.9-40-40-40H88c-22.09 0-40 17.9-40 40v54zm56 138c0-30.9 25.1-56 56-56s56 25.1 56 56-25.1 56-56 56-56-25.1-56-56zm56-40c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm-36.9-67.1c5.4-12.2 17.1-20.9 30.9-20.9h12c13.8 0 25.5 8.7 30 20.9 4.9 1.6 9.7 3.6 14.3 5.9 11.8-5.4 26.2-3.3 36 6.4l8.5 8.5c9.7 9.8 11.8 24.2 6.4 36 2.3 4.6 4.3 9.4 5.9 13.4 12.2 5.4 20.9 17.1 20.9 30.9v12c0 13.8-8.7 25.5-20.9 30-1.6 4.9-3.6 9.7-5.9 14.3 5.4 11.8 3.3 26.2-6.4 36l-8.5 8.5c-9.8 9.7-24.2 11.8-36 6.4-4.6 2.3-9.4 4.3-14.3 5.9-4.5 12.2-16.2 20.9-30 20.9h-12c-13.8 0-25.5-8.7-30.9-20.9-4-1.6-8.8-3.6-13.4-5.9-11.81 5.4-26.23 3.3-35.97-6.4l-8.48-8.5a32.088 32.088 0 0 1-6.47-36c-2.28-4.6-4.27-9.4-5.92-14.3C40.68 407.5 32 395.8 32 382v-12c0-13.8 8.68-25.5 20.86-30.9 1.65-4 3.64-8.8 5.92-13.4a32.088 32.088 0 0 1 6.47-36l8.48-8.5c9.74-9.7 24.16-11.8 35.97-6.4 4.6-2.3 9.4-4.3 13.4-5.9zM154 264c-7.7 0-14.2 5.5-15.7 12.8l-.9 4.7-4.7 1.4c-7.6 2-13.2 4.7-19.2 8l-4.3 2.3-4-2.7c-6.22-4.1-14.68-3.4-20.15 2.1l-8.49 8.4c-5.47 5.5-6.15 13.1-2.03 20.2l2.67 4-2.33 4.3c-3.32 6-6.01 11.6-7.98 19.2l-1.36 4.7-4.73.9c-7.31 1.5-12.8 8-12.8 15.7v12c0 7.7 5.49 14.2 12.8 15.7l4.73.9 1.36 4.7c1.97 6.7 4.66 13.2 7.98 19.2l2.33 4.3-2.67 4c-4.12 6.2-3.44 14.7 2.03 19.3l8.49 9.3c5.47 5.5 13.93 6.2 20.15 2.1l4-2.7 4.3 2.3c6 3.3 11.6 6 19.2 8l4.7 1.4.9 4.7c1.5 7.3 8 12.8 15.7 12.8h12c7.7 0 14.2-5.5 15.7-12.8l.9-4.7 4.7-1.4c6.7-2 13.2-4.7 19.2-8l4.3-2.3 4 2.7c6.2 4.1 14.7 3.4 19.3-2.1l9.3-9.3c5.5-4.6 6.2-13.1 2.1-19.3l-2.7-4 2.3-4.3c3.3-6 6-12.5 8-19.2l1.4-4.7 4.7-.9c7.3-1.5 11.9-8 11.9-15.7v-12c0-7.7-4.6-14.2-11.9-15.7l-4.7-.9-1.4-4.7c-2-7.6-4.7-13.2-8-19.2l-2.3-4.3 2.7-4c4.1-7.1 3.4-14.7-2.1-20.2l-9.3-8.4c-4.6-5.5-13.1-6.2-19.3-2.1l-4 2.7-4.3-2.3c-6-3.3-12.5-6-19.2-8l-4.7-1.4-.9-4.7c-1.5-7.3-8-12.8-15.7-12.8h-12zm382 112c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zm-56 40c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40zm6-168c13.8 0 25.5 8.7 30 20.9 4.9 1.6 9.7 3.6 14.3 5.9 11.8-5.4 26.2-3.3 36 6.4l8.5 8.5c9.7 9.8 11.8 24.2 6.4 36 2.3 4.6 4.3 9.4 5.9 13.4 12.2 5.4 20.9 17.1 20.9 30.9v12c0 13.8-8.7 25.5-20.9 30-1.6 4.9-3.6 9.7-5.9 14.3 5.4 11.8 3.3 26.2-6.4 36l-8.5 8.5c-9.8 9.7-24.2 11.8-36 6.4-4.6 2.3-9.4 4.3-14.3 5.9-4.5 12.2-16.2 20.9-30 20.9h-12c-13.8 0-25.5-8.7-30.9-20.9-4-1.6-8.8-3.6-13.4-5.9-11.8 5.4-26.2 3.3-36-6.4l-8.5-8.5c-9.7-9.8-11.8-24.2-6.4-36-2.3-4.6-4.3-9.4-5.9-14.3-12.2-4.5-20.9-16.2-20.9-30v-12c0-13.8 8.7-25.5 20.9-30.9 1.6-4 3.6-8.8 5.9-13.4-5.4-11.8-3.3-26.2 6.4-36l8.5-8.5c9.8-9.7 24.2-11.8 36-6.4 4.6-2.3 9.4-4.3 13.4-5.9 5.4-12.2 17.1-21.8 30.9-21.8l12 .9zm-28.6 33.5-4.7 1.4c-7.6 2-13.2 4.7-19.2 8l-4.3 2.3-4-2.7c-7.1-4.1-14.7-3.4-20.2 2.1l-8.4 8.4c-5.5 5.5-6.2 13.1-2.1 20.2l2.7 4-2.3 4.3c-3.3 6-6 11.6-8 19.2l-1.4 4.7-4.7.9c-7.3 1.5-12.8 8-12.8 15.7v12c0 7.7 5.5 14.2 12.8 15.7l4.7.9 1.4 4.7c2 6.7 4.7 13.2 8 19.2l2.3 4.3-2.7 4c-4.1 6.2-3.4 14.7 2.1 19.3l8.4 9.3c5.5 5.5 13.1 6.2 20.2 2.1l4-2.7 4.3 2.3c6 3.3 11.6 6 19.2 8l4.7 1.4.9 4.7c1.5 7.3 8 12.8 15.7 12.8h12c7.7 0 14.2-5.5 15.7-12.8l.9-4.7 4.7-1.4c6.7-2 13.2-4.7 19.2-8l4.3-2.3 4 2.7c6.2 4.1 14.7 3.4 19.3-2.1l9.3-9.3c5.5-4.6 6.2-13.1 2.1-19.3l-2.7-4 2.3-4.3c3.3-6 6-12.5 8-19.2l1.4-4.7 4.7-.9c7.3-1.5 12.8-8 12.8-15.7v-12c0-7.7-5.5-14.2-12.8-15.7l-4.7-.9-1.4-4.7c-2-7.6-4.7-13.2-8-19.2l-2.3-4.3 2.7-4c4.1-7.1 3.4-14.7-2.1-20.2l-9.3-8.4c-4.6-5.5-13.1-6.2-19.3-2.1l-4 2.7-4.3-2.3c-6-3.3-12.5-6-19.2-8l-4.7-1.4-.9-4.7c-1.5-7.3-8-12.8-15.7-12.8h-12c-7.7 0-14.2 5.5-15.7 12.8l-.9 4.7z" />
  </svg>
);

export default SvgTruckMonster;

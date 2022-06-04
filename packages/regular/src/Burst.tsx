import * as React from "react";
import { SVGProps } from "react";

const SvgBurst = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m200.9 116.2 32.3-99.6A23.96 23.96 0 0 1 256 .001c10.4 0 19.6 6.705 22.8 16.599l34.5 106.5 70.5-25.65c8.8-3.19 18.6-1.02 24.3 5.55 7.5 6.6 9.6 16.4 6.5 25.2l-25.7 70.5 106.5 34.5c9.9 3.2 16.6 12.4 16.6 22.8s-6.7 19.6-16.6 22.8l-103.1 33.4 52.9 100.6c4.9 9.3 3.2 20.7-5.1 27.3-6.6 8.3-18 10-27.3 5.1l-100.6-52.9-33.4 103.1c-3.2 9.9-12.4 16.6-22.8 16.6s-19.6-6.7-22.8-16.6l-33.4-103.1-100.63 52.9c-9.3 4.9-20.71 3.2-28.14-5.1-7.43-6.6-9.16-18-4.27-27.3l52.94-100.6-103.1-33.4A23.96 23.96 0 0 1 0 256c0-10.4 6.705-19.6 16.6-22.8l99.6-32.3L4.208 37.57C-2.33 28.04-1.143 15.2 7.03 7.03c8.17-8.174 21.01-9.36 30.54-2.822L200.9 116.2zm-39.2 100.2c-4.9 14.3-16.3 25.5-30.7 30.2l-29.1 9.4 32.6 10.6c13.4 4.3 24.3 14.4 29.6 27.5 5.4 13.1 4.6 27.9-1.9 40.5l-17 32.2 32.2-17c11.7-6.5 27.4-7.3 40.5-1.9 12.2 5.3 23.2 16.2 27.5 29.6l10.6 32.6 10.6-32.6c4.3-13.4 14.4-24.3 27.5-29.6 13.1-5.4 27.9-4.6 40.5 1.9l32.2 17-17-32.2c-6.5-12.6-7.3-27.4-1.9-40.5 5.3-13.1 16.2-23.2 29.6-27.5l32.6-10.6-36-11.7c-12.4-4-22.6-12.9-28.3-24.6-5.8-11.7-6.5-25.2-2-37.5l8-22-22 8c-12.3 4.5-26.7 2.9-37.5-1.9-11.7-5.8-20.6-16-24.6-28.4l-11.7-36-9.4 29.1c-4.7 14.4-15.9 25.8-30.2 30.7-14.4 4.8-30.2 2.7-42.6-5.9l-57.2-39.2 39.2 57.2c8.6 12.4 10.7 28.2 5.9 42.6z" />
  </svg>
);

export default SvgBurst;
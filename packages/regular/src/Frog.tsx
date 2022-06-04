import * as React from "react";
import { SVGProps } from "react";

const SvgFrog = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 190c0-21.5-11.75-41-30.5-51.25C516.9 122.1 479.6 109 460 102.1 448.6 61.75 412 32 368 32c-43 0-78.88 28.38-91.13 67.38C120.2 120.5-.5 254.5 0 417c.125 34.9 29.13 63 64 63h304c8.875 0 16-7.125 16-16 0-17.62-14.38-32-32-32h-29.75l18.88-25.5c9.25-13.88 14.75-29.25 17.12-44.75L469.6 480h90.38c8.875 0 16-7.125 16-16 0-17.62-14.38-32-32-32h-53.63l-98.5-104.6 154.4-86.75C564.6 230.4 576 211 576 190zm-53.2 8.8L348 294.9c-7.5-15.38-18.25-29.5-32.88-40.38-39.63-29.75-95-29.75-134.7 0l-34.75 26c-10.62 8-12.75 23-4.75 33.63 7.875 10.63 23 12.75 33.5 4.875L209.2 292.9c22.63-17.12 54.38-17 76.1 0 27.25 20.5 33.88 58.63 15.63 86L262.5 432H64c-8.625 0-16-7-16-15.12-.375-135.8 100.8-251.8 235.2-270l30.25-4 9.125-29.12C329 93.5 347.3 80 368 80c21.12 0 39.1 14.38 45.75 35.12L420.5 139l23.5 8.4c18.38 6.5 52.88 19.38 78.5 33.38 3.4 2.02 5.5 5.32 5.5 9.22 0 3.6-2.9 7-5.2 8.8zM368 120c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.8-24-24-24z" />
  </svg>
);

export default SvgFrog;
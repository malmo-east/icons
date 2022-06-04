import * as React from "react";
import { SVGProps } from "react";

const SvgParachuteBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M511.3 208c.8 8.8-6.5 16-15.3 16h-36.7L343.1 340.2c5.6 7.8 8.9 17.4 8.9 27.8v96c0 26.5-21.5 48-48 48h-96.9c-25.6 0-48-21.5-48-48v-96c0-10.4 4.2-20 9.8-27.8L52.69 224H15.1C7.163 224-.063 216.8.689 208 8.68 114.4 86.57 0 255.1 0h1c169.4.052 247.2 114.4 255.2 208zM264 224v96h40c10.4 0 19.1 3.3 27.8 8.9L436.7 224H264zm-16.9 0H75.31L180.2 328.9c7.8-5.6 17.4-8.9 26.9-8.9h40v-96zM16.76 208h94.34c0-80.9 32-150.98 79.5-185.38C76.58 47.09 23.57 134.9 16.76 208zM167.3 70.03c-24 34.67-40.2 83.37-40.2 137.97H384c0-54.6-15.3-103.3-39.3-137.97C320.6 35.32 289 16 255.1 16c-33 0-63.7 19.32-87.8 54.03zm154.1-47.41C368 57.02 400 127.1 400 208h95.2c-6.8-73.1-59.8-160.91-173.8-185.38zM207.1 336c-16.8 0-32 14.3-32 32v96c0 17.7 15.2 32 32 32H304c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32h-96.9z" />
  </svg>
);

export default SvgParachuteBox;

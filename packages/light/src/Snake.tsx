import * as React from "react";
import { SVGProps } from "react";

const SvgSnake = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M384 80c0 8.84-7.2 16-16 16s-16-7.16-16-16 7.2-16 16-16 16 7.16 16 16zm-32 64c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zM176 512H115.2c-12.7 0-25.22-2.5-36.92-7.4l-63.51-26.4C5.826 474.4 0 465.7 0 456s5.826-18.4 14.77-22.2l63.51-26.4c11.7-4.9 24.22-7.4 36.92-7.4H344c13.3 0 24-10.7 24-24s-10.7-24-24-24H180c-81.74 0-148-66.3-148-148S98.26 56 180 56h96.1c21.2-29.87 55.1-48 91.6-48 16 0 31.8 3.51 46.4 10.29l54.4 25.41C495 56.08 512 82.72 512 112c0 29.3-17 55.9-43.5 68.3l-53.1 24.8c-8.7 4-17.8 7-27.1 8.8-7.3 1.4-14.7 2.1-22.1 2.1h-4.5c-6 0-11.9-.5-17.7-1.5-8-1.3-15.7-3.5-23.1-6.5-19.6-8.9-36.8-21.8-48.9-40h-92c-19.9 0-36 16.1-36 36s16.1 36 36 36h164c5.1 0 11.9.4 17.7 1.1 1.5.2 3 .5 4.5.7 6.8 1.1 13.5 2.8 19.9 4.9C440.6 264.4 480 315.6 480 376c0 75.1-60.9 136-136 136H176zM293.9 88H180c-64.1 0-116 51.9-116 116s51.9 116 116 116h164c30.9 0 56 25.1 56 56s-25.1 56-56 56H115.2c-8.4 0-16.82 1.7-24.62 4.9L44.8 456l45.78 19.1c7.8 3.2 16.22 4.9 24.62 4.9H344c57.4 0 104-46.6 104-104s-46.6-104-104-104H180c-37.6 0-68-30.4-68-68s30.4-68 68-68h109.1l9.5 14.2c14.1 21.1 37.7 33.8 63.1 33.8h4.5c12.3 0 24.5-2.7 35.6-7.9l52.3-24.8c16.1-7.1 25.9-22.4 25.9-39.3 0-16.85-9.8-32.18-25.9-39.3l-53.6-25.41A77.68 77.68 0 0 0 367.7 40a77.76 77.76 0 0 0-64.3 33.99L293.9 88z" />
  </svg>
);

export default SvgSnake;

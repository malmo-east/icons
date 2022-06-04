import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsSpin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M107.2 123.2 74.34 90.35c-15.12-15.12-4.41-40.97 16.97-40.97h86.09c8.8 0 16 7.16 16 16v86.02c0 21.4-25.9 32.1-41 17l-33.9-33.9c-28.24 32.4-45.36 74.7-45.36 121 0 11.1.97 22 2.85 32.5H59.76c-1.73-10.6-2.62-21.4-2.62-32.5 0-50.7 18.9-97.1 50.06-132.3zM85.66 79.03l32.54 32.57h.1l.8.9 44.6 44.6c5.1 5 13.7 1.5 13.7-5.7V65.37H91.31c-7.13 0-10.69 8.62-5.65 13.66zm171.44-7.5c-11.3 0-22.4 1.02-34 2.98V58.26c11.7-1.79 22.7-2.73 34-2.73 51.6 0 98.6 19.52 134.1 51.57l32.7-32.75c15.1-15.12 41-4.42 41 16.97v86.08c0 8.8-7.2 16-16 16h-86.1c-21.3 0-32-25.9-16.9-41l33.9-34c-32.5-29.14-75.5-46.87-122.7-46.87zm178.1 14.13-78 78.04c-5.1 5.1-1.5 13.7 5.6 13.7h86.1V91.32c0-7.13-8.6-10.7-13.7-5.66zm5.9 169.84c0-10.7-.9-21.3-2.7-31.5h16.3c1.6 10.3 2.4 20.8 2.4 31.5 0 51.6-19.5 98.6-51.5 134.1l34.3 34.3c15.1 15.2 4.4 41-17.8 41h-85.2c-8.8 0-16-7.2-16-16v-86.1c0-21.3 25.9-32 41-16.9l32.3 32.3c29.2-32.5 46.9-75.5 46.9-122.7zm-46.8 145.6-1.4-1.6-42.3-42.3c-5.1-5-13.7-1.5-13.7 5.6v86.1h85.2c8 0 11.6-8.6 6.5-13.7L394.4 401l-.1.1zm-107.2 52.1c-9.2 1.5-19.5 2.3-30 2.3-50.7 0-97-18.9-132.3-50l-34.46 34.4c-15.12 15.2-40.97 4.4-40.97-17.8v-85.2c0-8.8 7.16-16 16-16h86.03c21.4 0 32.1 25.9 17 41l-32.3 32.2c32.4 28.3 74.7 45.4 121 45.4 10.6 0 20-.9 30.9-3.4l-.9 17.1zM65.37 336.9v85.2c0 8 8.62 11.6 13.66 6.5l78.07-78c5-5.1 1.5-13.7-5.7-13.7H65.37z" />
  </svg>
);

export default SvgArrowsSpin;
import * as React from "react";
import { SVGProps } from "react";

const SvgLungsVirus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M319.1 143.1c8.846 0 16.01-7.161 16.01-16.01V16.01C336 7.17 328.8 0 319.1 0s-16 7.17-16 16.01v111.1c0 9.69 8 15.99 16 15.99zm-119 306.6c-42.56 20.35-92.18 30.38-102.9 30.38-36.43 0-66.1-27.02-66.1-60.2 0-7.203.953-14.41 2.812-21.39C55.68 320.2 88.67 245.6 132.9 176.4c27.81-43.94 32.13-48.38 53.11-48.38 20.1 0 38.07 15.11 38.07 33.7V160c0 8.842 7.166 16.01 16.01 16.01 8.633 0 15.58-6.885 15.91-15.44C255.4 124.8 224.3 96 185.1 96c-43.99 0-57.97 28.56-80.09 63.13-45.99 71.88-80.35 149.7-102 231a114.892 114.892 0 0 0-3.867 31.54c.809 50.22 44.3 89.5 94.52 90.31 1.25.02 46.21.816 119.1-33.23 10.22-4.721 12.73-18.14 4.768-26.11-3.131-4.84-10.431-5.94-17.431-2.94zM256.2 160c0 .207-.129.397-.137.602.006.375.017.732.017 1.11l.12-1.712zM304 287.1c-8.836 0-16 7.164-16 15.1s7.164 15.99 16 15.99 16-7.164 16-16-7.2-15.09-16-15.09zm131.9-16 .355-.011-.355.011zm-99.9 48c-8.836 0-16 7.162-16 16 0 8.834 7.164 16.01 16 16.01s16-7.166 16-15.1c0-8.81-7.2-16.91-16-16.91zm85.8 80.1-8.576-8.576c-20.16-20.16-5.881-54.63 22.63-54.63H448c8.844 0 16-7.156 16-16s-7.2-16.894-16-16.894h-12.12c-28.51 0-42.79-34.47-22.63-54.63l8.576-8.577c6.25-6.25 6.25-16.37 0-22.62-3.125-3.125-7.219-4.691-11.31-4.691s-8.188 1.566-11.31 4.691l-8.576 8.577c-6.518 6.516-14.53 9.433-22.4 9.433C351.8 236.2 336 223.4 336 204.1v-12.12c0-8.842-7.156-15.1-16-15.1s-16 7.158-16 15.1v12.12c0 19.29-15.78 32.06-32.23 32.06-7.863 0-15.88-2.915-22.4-9.433l-8.57-8.527c-3.1-3.2-7.2-4.7-11.3-4.7s-8.2 1.5-11.3 4.7c-6.25 6.25-6.25 16.37 0 22.62l8.576 8.577c20.16 20.16 5.881 54.63-22.63 54.63H192c-8.844 0-16 7.156-16 16s7.156 16 16 16h12.12c28.51 0 42.79 34.47 22.63 54.63l-8.576 8.576c-6.25 6.25-6.25 16.37 0 22.62 3.125 3.125 7.219 4.688 11.31 4.688s8.188-1.562 11.31-4.688l8.576-8.575c6.52-6.516 14.53-9.446 22.4-9.446C288.2 403.8 304 416.6 304 435.9v12.12c0 8.844 7.156 16 16 16s16-7.156 16-16V435.9c0-19.29 15.78-32.07 32.23-32.07 7.863 0 15.88 2.929 22.39 9.446l8.576 8.575c3.125 3.125 7.219 4.688 11.31 4.688s8.188-1.562 11.31-4.688C428.1 415.6 428.1 405.4 421.8 399.2zm-45-55.7c-3.814 9.209-5.363 18.91-4.787 28.42a64.051 64.051 0 0 0-3.732-.107c-19.2 0-36.45 8.438-48.23 21.79-11.78-13.36-29.04-21.79-48.23-21.79-1.25 0-2.496.035-3.734.107.576-9.502-.973-19.21-4.787-28.42a64.102 64.102 0 0 0-16.74-23.51 64.653 64.653 0 0 0 16.64-23.49c3.9-9.2 5.4-18.9 4.8-28.4a64.07 64.07 0 0 0 3.734.107c19.2 0 36.45-8.439 48.23-21.8 11.78 13.36 29.04 21.8 48.23 21.8a64.14 64.14 0 0 0 3.732-.107c-.576 9.502.973 19.21 4.787 28.42a64.102 64.102 0 0 0 16.74 23.51C386.4 326.3 380.6 334.3 376.8 343.5zm259.3 46.6c-21.67-81.31-56.03-159.1-102-231-22.12-34.56-36.1-63.13-80.09-63.13-38.32 0-69.36 28.86-70 64.63.326 8.555 7.254 15.42 15.89 15.42 8.838 0 16-7.168 16-16.01v1.699c0-18.59 17.07-33.7 38.07-33.7 20.98 0 25.31 4.438 53.11 48.38 44.26 69.14 77.25 143.8 98.1 222a83.26 83.26 0 0 1 2.812 21.39c0 33.19-29.67 60.2-66.1 60.2-10.7 0-60.31-10.03-102.9-30.38-6.164-2.947-13.45-1.82-18.28 3.01-7.963 7.965-5.455 21.38 4.768 26.11 73.75 34.05 118.7 33.25 119.1 33.23 50.21-.805 93.71-40.09 94.52-90.31 1.1-10.539-.2-21.239-3-31.539z" />
  </svg>
);

export default SvgLungsVirus;
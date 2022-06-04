import * as React from "react";
import { SVGProps } from "react";

const SvgGear = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M160 256c0-53.9 42.1-96 96-96 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96zm96-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zM293.1 0c22.2 0 41.5 15.19 46.7 36.74l7.8 32.47c8.5 4.15 16.6 8.86 24.3 14.07l32.1-9.45c21.3-6.27 44.1 2.84 55.2 22.04l37.1 64.23c11 19.2 7.5 43.5-8.5 58.8l-24.3 22.2c.3 5.5.5 10.2.5 14.9 0 4.7-.2 9.4-.5 14l24.3 23.1c16 15.3 19.5 39.6 8.5 58.8l-37.1 64.2c-11.1 19.2-33.9 28.3-55.2 22.1l-32.1-9.5c-7.7 5.2-15.8 9.9-24.3 14.1l-7.8 32.5c-5.2 21.5-24.5 36.7-46.7 36.7h-74.2c-22.2 0-41.5-15.2-46.7-36.7l-7.8-32.5c-8.5-4.2-16.6-8.9-24.3-14.1l-33 9.5c-20.37 6.2-43.16-2.9-54.25-22.1l-37.1-64.2c-11.09-19.2-7.582-43.5 8.48-58.8L48.47 270c-.31-4.6-.47-9.3-.47-14.9 0-3.8.16-8.5.47-14l-24.24-22.2c-16.063-15.3-19.57-39.6-8.48-58.8l37.1-64.23c11.09-19.2 33.88-28.31 54.25-22.04l33 9.45c7.7-5.21 15.8-9.92 24.3-14.07l7.8-32.47C177.4 15.18 196.7 0 218.9 0h74.2zm-87.6 103.6-11.2 4.7c-12.7 5.3-24.5 12.2-35.2 20.4l-9.7 7.4-54.98-16.2-37.11 64.2 41.5 39.5-1.53 12C96.44 242.3 96 249.1 96 256c0 6.9.44 13.7 1.28 20.4l1.53 12-41.49 39.5 37.1 64.2 54.98-16.2 9.7 7.4c10.7 8.2 22.5 15.1 35.2 20.4l11.2 4.7 13.4 55.6h74.2l13.4-55.6 11.2-4.7c12.7-5.3 24.5-12.2 35.2-20.4l9.7-7.4 55 16.2 37.1-64.2-41.5-39.5 1.5-12c.9-6.7 1.3-13.5 1.3-20.4 0-6.9-.4-13.7-1.3-20.4l-1.5-12 41.5-39.5-37.1-64.2-55 16.2-9.7-7.4c-10.7-8.2-22.5-15.1-35.2-20.4l-11.2-4.7L293.1 48h-74.2l-13.4 55.6z" />
  </svg>
);

export default SvgGear;

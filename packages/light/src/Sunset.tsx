import * as React from "react";
import { SVGProps } from "react";

const SvgSunset = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M91 440.1a16.02 16.02 0 0 0 13.34 7.141c12.79 0 20.41-14.23 13.32-24.85l-27.41-41.04 86-17.22c6.375-1.248 11.38-6.115 12.62-12.48l17.25-85.87 73 48.55a15.867 15.867 0 0 0 17.75 0l73-48.55 17.25 85.87c1.125 6.24 6.125 11.23 12.62 12.48l86 17.22-27.39 41.03c-7.098 10.63.533 24.87 13.33 24.87A16.02 16.02 0 0 0 485 440.14l40.74-60.91c3-4.367 3.5-10.11 1.5-14.98s-6.5-8.486-11.75-9.609l-99-19.72-19.75-98.85c-1-5.242-4.625-9.611-9.625-11.73-5-1.996-10.62-1.498-15 1.498l-84 55.91-84-55.91c-4.375-2.871-10.13-3.494-15-1.498-4.875 1.998-8.5 6.49-9.625 11.73L159.8 335.8l-99 19.72c-5.25.998-9.625 4.617-11.75 9.609s-1.5 10.61 1.5 14.98L91 440.1zm196.8-87.8c-48.71 0-89.93 31.36-105.2 74.86-1.533 4.365-1.562 20.99 15.05 20.99 6.771 0 12.5-4.355 14.73-10.65 10.97-31.01 40.67-53.25 75.43-53.25 34.88 0 64.49 22.24 75.53 53.26 2.158 6.061 7.611 10.64 15.07 10.64 10.93 0 18.34-10.76 14.74-21C377.8 383.6 336.6 352.3 287.8 352.3zM560 480H16c-8.801 0-16 7.189-16 15.98C0 504.8 7.199 512 16 512h544c8.801 0 16-7.189 16-15.97 0-8.83-7.2-16.03-16-16.03zM276.7 219.3c3.1 3.1 7.2 4.7 11.3 4.7s8.188-1.562 11.31-4.688l96-96c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L304 169.4V16c0-8.844-7.2-16-16-16s-16 7.156-16 16v153.4l-68.7-68.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62l96.02 95.98z" />
  </svg>
);

export default SvgSunset;

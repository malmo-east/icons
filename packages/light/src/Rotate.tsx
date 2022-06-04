import * as React from "react";
import { SVGProps } from "react";

const SvgRotate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1 272.2c-8.766-1.562-16.97 4.406-18.42 13.12C415.3 370.3 342.3 432 255.1 432c-49.96 0-95.99-21.56-128.5-56.8l59.88-59.88c5.42-4.52 6.82-11.52 4.32-17.42-2.5-6-8.3-9.9-14.8-9.9H48c-8.84 0-16 7.2-16 16v128c0 6.469 3.891 12.31 9.875 14.78a15.985 15.985 0 0 0 17.435-3.468l45.6-45.6C143.3 438.9 197.4 464 256 464c101.1 0 188.3-72.91 205.1-173.3 1.5-8.8-4.4-17-14-18.5zM64 393.4V320h73.38L64 393.4zM470.1 65.22c-2-.81-4-1.22-6.1-1.22-4.156 0-8.25 1.625-11.31 4.688l-45.6 45.6C368.7 73.15 314.6 48 256 48 154 48 67.7 120.91 50.9 221.3c-1.48 8.8 4.4 17 13.12 18.5 8.766 1.562 16.97-4.406 18.42-13.12C96.69 141.7 169.7 80 256 80c49.96 0 96.02 21.56 128.6 56.8l-59.88 59.88a15.986 15.986 0 0 0-3.469 17.44A15.898 15.898 0 0 0 336 224h128c8.8 0 16-7.2 16-16V80c0-6.47-3.9-12.31-9.9-14.78zM448 192h-73.38L448 118.6V192z" />
  </svg>
);

export default SvgRotate;

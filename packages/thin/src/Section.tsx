import * as React from "react";
import { SVGProps } from "react";

const SvgSection = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M187.6 345.4c36.68-10.65 60.71-33.2 66.67-65.43 13.78-74.61-59.59-94.2-124.3-111.5l-15.77-4.27c-69.89-19.1-106.01-39-96.79-88.7 8.469-45.68 63.46-67.67 140-56.68 15.72 2.312 34.15 6.967 58.09 14.71 4.219 1.281 8.748-.967 10.09-5.154a8.047 8.047 0 0 0-5.156-10.09c-24.81-7.998-44.12-12.87-60.71-15.28C73.93-9.54 11.84 17.74 1.658 72.57-8.34 126.6 28.52 151.8 68.02 166.6c-36.56 10.7-60.411 33.2-66.362 64.5-13.618 74.5 59.742 94.6 108.242 108l15.94 4.279c63.68 17.03 123.8 33.12 112.7 93.13-8.436 45.62-63.24 67.99-140 56.64-24.31-3.406-51.78-12.65-75.99-20.81l-11.1-4.029c-4.156-1.344-8.719.906-10.12 5.061-1.375 4.219.875 8.748 5.062 10.12l11.94 4c24.9 8.373 53.09 17.9 78.83 21.49 13.87 2.031 27.12 3.031 39.65 3.031 64.9 0 109.9-26.62 118.4-72.58C263.1 387.1 230.7 361.8 187.6 345.4zm-73.4-21.8c-69.89-19.1-106.01-39-96.79-88.7 6.02-32.6 35.82-53.4 81.46-58.3 3.781 1.07 26.99 7.359 26.99 7.359 63.68 17.03 123.8 33.12 112.7 93.14-6.031 32.66-36.54 53.31-82.05 58.14C147.7 332.7 114.2 323.6 114.2 323.6z" />
  </svg>
);

export default SvgSection;
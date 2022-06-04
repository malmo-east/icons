import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsMinimize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m45.77 477.5 162.3-162.3v140.7c0 4.42 3.58 8 7.998 8a7.897 7.897 0 0 0 7.943-7.942L224.1 295.9a7.996 7.996 0 0 0-8-7.998L56.06 287.9a7.894 7.894 0 0 0-7.942 7.94c0 4.42 3.58 8 8 8h140.7l-162.3 162.3C26.97 473.7 38.29 485 45.77 477.5zM216.1 48.12a7.997 7.997 0 0 0-7.998 8v140.7L45.76 34.46c-7.49-7.5-18.78 3.85-11.31 11.31l162.3 162.3H56.11c-4.42 0-8 3.58-8 8a7.897 7.897 0 0 0 7.945 7.94l160.1.058c4.416 0 8-3.574 8-7.998L224.1 56.06c0-4.42-3.6-7.94-8-7.94zm79.8 415.78a7.997 7.997 0 0 0 7.998-8V315.2l162.3 162.3c7.486 7.488 18.79-3.832 11.31-11.31l-162.3-162.3h140.7c4.42 0 8-3.58 8-8a7.896 7.896 0 0 0-7.943-7.94l-160.1-.059c-4.416 0-8 3.574-8 7.998l.057 160.1c-.022 4.411 3.578 7.911 7.978 7.911zm0-239.8 160.1-.058a7.896 7.896 0 0 0 7.945-7.94c0-4.42-3.58-8-8-8h-140.7l162.3-162.3c7.469-7.465-3.816-18.81-11.31-11.31l-162.3 162.3V56.12c0-4.42-3.58-8-7.998-8a7.9 7.9 0 0 0-7.945 7.942l-.055 160.1c-.037 4.338 3.563 7.938 7.963 7.938z" />
  </svg>
);

export default SvgArrowsMinimize;
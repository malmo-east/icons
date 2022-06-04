import * as React from "react";
import { SVGProps } from "react";

const SvgRam = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M432 192c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm96 0c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zM352 48c0-26.51 21.5-48 48-48s48 21.49 48 48v19.97c8.9-2.58 18.3-3.97 28-3.97 12.7 0 24.8 2.36 36 6.68V48c0-26.51 21.5-48 48-48s48 21.49 48 48v8c0 4.42-3.6 8-8 8s-8-3.58-8-8v-8c0-17.67-14.3-32-32-32s-32 14.33-32 32v30.57a99.974 99.974 0 0 1 39.4 44.83l50.9 34.6c8.6 5.8 13.7 15.5 13.7 25.9 0 24-26 38.2-46.8 27.1l-9.2-5.2V240c0 53-43 96-96 96h-8c-53.9 0-96-43-96-96v-34.2l-9.2 5.2c-21.7 11.1-47.7-3.1-47.7-27.1 0-10.4 6-20.1 14.6-25.9l50.9-34.6c9.5-21.5 26.4-38.92 47.4-49.22V48c0-17.67-14.3-32-32-32s-32 14.33-32 32v8c0 4.42-3.6 8-8 8s-8-3.58-8-8v-8zm124 32c-46.4 0-84 37.6-84 84v76c0 44.2 35.8 80 80 80h8c44.2 0 80-35.8 80-80v-76c0-46.4-37.6-84-84-84zm100 107.4 17.1 9.7c10.2 5 22.9-1.5 22.9-13.2 0-5.1-2.5-9.8-6.7-12.7l-34.6-23.5c.8 4.4 1.3 10.7 1.3 15.4v24.3zm-198.7-39.7-34.6 23.5c-4.2 2.9-6.7 7.6-6.7 12.7 0 11.7 12.7 18.2 22.9 13.2l17.1-9.7V164c0-5.6.5-11.9 1.3-16.3zm-73.1-77.82c6.9-5.51 15-9.61 23.9-11.88.3 5.6 2.1 10.8 4.9 15.25-7 1.64-13.4 4.81-18.8 9.16-6.7 5.32-16.4 4.44-22.1-1.99-8.8-10.09-21.7-16.42-37-16.42-13.5 0-26.4 6.33-35.2 16.42-5.7 6.43-15.4 7.31-22.1 1.99C189.7 75.89 179.3 72 167.1 72c-21.6 0-40.6 15.56-45.7 36.5-2 8.1-9.8 13.3-18 12.1-3.3-.4-4.88-.6-8.3-.6-25.61 0-48 21.5-48 48 0 4 1.39 7.9 2.32 11.6 1.77 7.2-1.52 14.6-7.99 18C26.26 205.7 16 221.7 16 240c0 18.3 10.26 34.3 25.43 42.4 6.47 3.4 9.76 10.8 7.99 18-.93 3.7-1.42 6.7-1.42 11.6 0 26.5 21.49 48 48 48 2.52 0 4.1-.2 7.4-.6 8.2-1.2 16 4 18 12 5.1 21 24.1 36.6 46.6 36.6 11.3 0 21.7-3.9 29.8-10.4 6.7-5.3 16.4-4.5 22.1 2 8.8 10.1 21.7 16.4 36.1 16.4 14.4 0 27.3-6.3 36.1-16.4 5.7-6.5 15.4-7.3 22.1-2 8.1 6.5 18.5 10.4 29.8 10.4 22.5 0 41.5-15.6 46.6-36.5 2-8.1 9.8-13.3 18-12.1 2.4.4 4.9.6 7.4.6 3.9 0 7.6-.5 11.2-1.3 7.6 3 15.5 5.3 23.7 6.9-8.3 5.5-18 9-28.5 10.1l-24.8 105.5c-4.3 18-20.4 30.8-38.9 30.8H344c-22.1 0-40-17.9-40-40v-24c0-4.4 3.6-8 8-8s8 3.6 8 8v24c0 13.3 10.7 24 24 24h14.7c11.1 0 20.8-7.7 23.3-18.5l23.4-99.4c-7.8 26.5-32.3 45.9-61.4 45.9-15.9 0-28.9-5.2-39.8-13.9-11.7 13.4-29 21.9-48.2 21.9-19.2 0-36.5-8.5-48.2-21.9C196.9 418.8 183 424 168 424c-29.1 0-53.6-19.4-61.4-45.9l22.5 99.4c3.4 10.8 13.1 18.5 24.2 18.5H168c13.3 0 24-10.7 24-24v-24c0-4.4 3.6-8 8-8s8 3.6 8 8v24c0 22.1-17.9 40-40 40h-14.7c-18.5 0-34.6-12.8-38.9-30.8L89.59 375.7C57.25 372.5 32 345.2 32 312c0-5.3.66-10.5 1.89-15.5C13.72 285.7 0 264.5 0 240s13.72-45.7 33.89-56.5c-1.23-5-1.89-10.2-1.89-15.5 0-35.3 28.65-64 64-64 3.34 0 6.6.3 9.8.8C112.7 76.77 137.9 56 168 56c15 0 28.9 5.19 39.8 13.88C219.5 56.47 236.8 48 256 48c19.2 0 36.5 8.47 48.2 21.88z" />
  </svg>
);

export default SvgRam;
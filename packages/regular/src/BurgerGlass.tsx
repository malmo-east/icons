import * as React from "react";
import { SVGProps } from "react";

const SvgBurgerGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M238.3 464c5.8 17.1 15.9 34.2 29.4 47.4-2 .3-4.1.5-6.2.6H96.67c-16.15 0-31.72-6.9-43.59-17-11.87-10.9-19.16-26-20.41-42.1L.001 34.46a31.99 31.99 0 0 1 8.455-24.23A31.97 31.97 0 0 1 19.16 2.649 31.968 31.968 0 0 1 32 0h288c4.4-.008 8.7.88 12.7 2.611 4 1.731 7.7 4.267 10.7 7.449 3 3.19 5.3 6.95 6.8 11.07 1.4 4.11 2.1 8.49 1.8 12.85l-9.2 147.62c-17.7 7.5-34.5 17-49.9 28.4v-2H61.76l18.75 241.2c.37 4.1 2.25 7.8 5.26 10.6 3 2.7 6.93 4.2 11 4.2H238.3zM58.02 160H295.9l6.2-112H49.31l8.71 112zM516.7 275.3c-3-3-4.7-7.1-4.7-11.3 0-3.2.9-6.3 2.7-8.9 1.8-2.6 3.4-4.7 7.2-5.9 2.9-1.2 6.1-1.5 9.2-.9 3.1.6 6 2.1 8.2 4.4 2.3 2.2 3.8 5.1 4.4 8.2.6 2.2-.6 6.3-.9 9.2-1.2 2.9-3.3 5.4-5.9 7.2-2.6 1.8-5.7 2.7-8.9 2.7-4.2 0-8.3-1.7-11.3-4.7zm120 116.5c-2.2 4.9-5.4 9.4-9.3 13.1 3 7.3 3.7 15.2 4.6 23.1-.9 22.3-8.9 43.6-24.6 59.4-15.8 15.7-37.1 23.7-59.4 24.6H348c-22.3-.9-43.6-8.9-59.4-24.6-15.7-15.8-24.6-37.1-24.6-59.4 0-7.9 1.6-15.8 4.6-23.1-4.2-4.8-7.6-8.7-9.7-14.1-2.2-5.3-3.2-11-2.8-17.7.3-4.9 1-10.5 4.6-15.5 2.8-5.1 6.6-9.5 11.3-12.9-6.9-11.6-8.7-25.6-7.8-37.8.9-13.1 5.4-25.7 12.9-36.4 20.5-25.4 46.6-45.7 76.3-59.3 28.7-13.6 62-20.2 94.6-19.2 32.6-1.9 65 5.6 94.7 19.2 29.6 13.6 55.7 33.9 76.2 59.3 7.5 10.7 12 23.3 12.9 36.4.9 12.2-1.8 26.2-7.8 37.8 4.9 3.7 8.9 8.4 11.7 13.8 2.7 5.4 4.2 11.4 4.3 17.5 0 5.4-1.1 10.8-3.3 15.8zm-320.3-94.7c-2.6 4.5-4.1 8.7-5.3 13.1.6 4.4 1.5 8.8 3.5 11.9 2 4.8 5.1 8.1 8.9 10.4 3.7 2.3 8.1 3.5 12.5 3.5h223.9c4.4 0 8.7-1.2 12.5-3.5 3.8-2.3 6.9-5.6 8.9-9.5 2-3.9 2.9-8.3 2.6-12.7-.3-4.4-1.7-8.7-4.3-13.2-16-18.2-36.2-33.3-59.1-43.4-22.8-10-47.6-15.6-72.5-13.7-24.9-1.9-49.7 3.7-72.5 13.7-22.8 10.1-43 25.2-59 43.4h-.1zm257.1 156.4c6.7-6.8 10.5-16 10.5-25.5 0-3.2-1.3-6.2-3.5-8.5-2.3-2.2-5.3-3.5-8.5-3.5H324c-3.2 0-6.2 1.3-8.5 3.5-2.2 2.3-3.5 5.3-3.5 8.5 0 9.5 3.8 18.7 10.5 25.5 6.8 6.7 16 10.5 25.5 10.5h200c9.5 0 18.7-3.8 25.5-10.5zM436.7 259.3c-3-3-4.7-7.1-4.7-11.3 0-3.2.9-6.3 2.7-8.9 1.8-2.6 3.4-4.7 7.2-5.9 2.9-1.2 6.1-1.5 9.2-.9 3.1.6 6 2.1 8.2 4.4 2.3 2.2 3.8 5.1 4.4 8.2.6 2.2-.6 6.3-.9 9.2-1.2 2.9-3.3 5.4-5.9 7.2-2.6 1.8-5.7 2.7-8.9 2.7-4.2 0-8.3-1.7-11.3-4.7zm-80 16c-3-3-4.7-7.1-4.7-11.3 0-3.2.9-6.3 2.7-8.9 1.8-2.6 3.4-4.7 7.2-5.9 2.9-1.2 6.1-1.5 9.2-.9 3.1.6 6 2.1 8.2 4.4 2.3 2.2 3.8 5.1 4.4 8.2.6 2.2-.6 6.3-.9 9.2-1.2 2.9-3.3 5.4-5.9 7.2-2.6 1.8-5.7 2.7-8.9 2.7-4.2 0-8.3-1.7-11.3-4.7z" />
  </svg>
);

export default SvgBurgerGlass;

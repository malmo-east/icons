import * as React from "react";
import { SVGProps } from "react";

const SvgWreath = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m298.9 384.7-74.87 31.25-74.93-31.25c-10.37-3.499-21.12 4.376-21.12 15.25l-.003 95.98c0 10.87 10.75 18.62 21.12 15.24l74.87-31.24 74.87 31.24c10.37 3.499 21.12-4.371 21.12-15.24l.007-95.98C319.1 389.1 309.2 381.3 298.9 384.7zm10.8-193.9c-.625-6.374-1.645-16.15-7.769-24.77-6.248-8.998-14.98-12.97-20.72-15.72-3.999-1.875-2.874-.875-5.998-4.624-4.249-4.999-10.75-12.37-21.12-15.87-10.37-3.499-19.87-1.5-25.99-.125-4.499 1-3.124 1-7.873 0-6.33-1.191-15.73-3.491-26.03.009-10.5 3.5-16.9 11-21.1 16-3 3.5-1.9 2.5-6.3 4.6-5.748 2.749-14.44 6.694-20.69 15.69-6.21 8.81-8.01 18.51-7.81 24.81-.5 5.124 0 3.499-2.374 7.999C132.8 204.5 128.1 212.1 128.1 223.1s4.7 20.4 7 26c2.249 4.124 1.874 2.5 2.374 7.999C139.1 263.5 140.1 273.1 146.2 281.7c6.3 9 15 13.1 20.6 15.9 4.124 1.875 2.874.875 6.123 4.624 4.249 4.999 10.75 12.37 21.12 15.87 10.37 3.499 19.74 1.5 25.99.125 4.499-1 3.124-1 7.873 0 4.124.875 14.75 3.499 25.87-.125 10.5-3.499 16.87-10.87 21.24-15.87 2.999-3.499 1.75-2.499 6.123-4.624 5.873-2.75 14.51-6.644 20.75-15.64 6.249-8.748 7.237-18.48 7.737-24.85.5-5.124 0-3.499 2.499-7.999 2.999-5.624 7.793-14.1 7.793-25.09s-4.793-19.52-7.793-25.15C309.7 194.6 310.2 196.1 309.7 190.8zm-48 62.8c-8.998 4.124-17.25 9.123-23.49 17.62-15.5-2.5-13.12-2.5-28.62 0-8.748-11.87-22.24-16.1-23.49-17.62-1.5-13.5-1.8-15.9-9.4-30.5 8.1-13.6 8-18 9.4-28.8 4.124-1.75 15.62-6.749 23.49-17.62 10.5 1.625 18.12 1.625 28.62 0 2.999 4.124 7.373 9.498 23.49 17.62 1.375 10.1 1.125 14.87 9.497 29.62-8.097 14.38-7.997 17.18-9.497 29.68zm174.9-71.9c1.874-14.5.09-29.5-5.783-43.5-5.873-14.12-15.21-26.11-27.08-35.11-3.749-13.1-10.95-26.99-21.45-37.49-10.25-10.5-23.29-17.88-37.54-21.62-8.997-11.75-20.93-21.12-35.05-26.87-10.5-4.374-21.56-6.499-32.81-6.499-3.624 0-7.123.125-10.62.625-12.62-7.25-27.2-11.25-42.32-11.25S194.2 3.999 181.6 11.25c-3.5-.5-7.1-.75-10.8-.75-11.25 0-22.23 2.343-32.6 6.592-14.25 5.874-26.26 15.15-35.13 26.78C88.98 47.74 76.22 55.08 65.72 65.58c-10.5 10.62-17.98 23.4-21.73 37.52-11.75 9-20.93 21-26.8 35.1-5.75 14-7.943 29-6.07 43.5C3.874 194.3 0 208.9 0 223.1c0 15.12 3.874 29.6 11.25 42.22-1.878 15.38 0 30.38 5.88 44.38 5.748 13.1 15.11 25.97 26.86 34.84 3.749 14.12 11.09 27.23 21.71 37.73 8.623 8.748 19.15 14.64 30.4 18.88v-1.25c0-12.1 5.139-25.25 14.39-34.24 2.999-2.999 6.483-5.374 9.982-7.373-24.74-3.749-34.74-24.1-30.37-44.62-12.37-1.1-23.49-9.873-28.74-22.37-5.124-12.12-3.124-25.62 3.874-35.74C54.86 248.8 47.99 237.2 47.99 223.1c0-13.25 6.873-24.87 17.25-31.62-6.998-10.12-8.997-23.5-3.874-35.74 5.249-12.5 16.25-20.62 28.62-22.75-2.624-12.12.25-25.12 9.498-34.37 13.62-13.5 30.74-10.25 34.49-9.498 2.125-12.37 10.25-23.5 22.74-28.62C169.6 56.12 182.8 58.74 192.4 65.24c6.623-10.37 18.24-17.25 31.49-17.25s24.87 6.874 31.62 17.25c9.622-6.624 22.87-9.123 35.74-3.874 12.5 5.249 20.62 16.25 22.74 28.62 3.624-.75 20.87-3.999 34.37 9.498 9.372 9.373 12.12 22.25 9.497 34.37 12.37 2.125 23.49 10.25 28.62 22.75 5.124 12.25 3.124 25.62-3.874 35.74 10.37 6.749 17.25 18.37 17.25 31.62s-6.873 24.87-17.25 31.62c6.998 10.12 8.997 23.5 3.874 35.74-5.249 12.5-16.37 20.37-28.74 22.37 4.374 19.75-5.873 40.99-30.49 44.62 14.62 8.249 24.62 23.75 24.62 41.62v1.25c11.25-4.124 21.73-10.08 30.36-18.83 10.62-10.62 17.88-23.66 21.75-37.66 11.62-8.998 21.05-20.96 26.8-34.96 5.748-13.1 7.813-28.91 5.938-43.4 7.248-12.62 11.25-27.2 11.25-42.32C447.9 208.8 444 194.3 436.6 181.7z" />
  </svg>
);

export default SvgWreath;
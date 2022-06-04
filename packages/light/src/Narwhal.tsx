import * as React from "react";
import { SVGProps } from "react";

const SvgNarwhal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m562.4 190.1 76.12-167.5c3.656-8.062.094-17.53-7.938-21.19-8-3.594-17.5-.125-21.19 7.939l-75.14 165.3C512.8 165.3 489 159.1 464 159.1c-72.28 0-142.2 25.83-197.1 72.85l-96.06 82.25c-6.967 5.963-15.07 8.645-23 8.645C129.5 323.7 112 309.3 112 287.1v-32l65.75-36.38C186.6 213.7 192 203.7 192 192.1v-81c0-9.391-7.709-15.99-16.01-15.99-2.969 0-6.012.844-8.807 2.707l-71.17 47.4L24.88 98.72c-2.8-1.86-5.86-2.71-8.83-2.71C7.727 96.01 0 102.6 0 112v80.93c.002 10.75 5.375 20.75 14.25 26.62L80 255.1v96C80 440.4 151.6 512 240 512h224c97.2 0 176-78.8 176-176 0-60.7-30.8-114.3-77.6-145.9zM96 228.3c-.17-.1-64-35.4-64-35.4v-51l46.24 30.8c5.26 3.5 11.47 5.4 17.78 5.4s12.48-1.9 17.78-5.4l46.27-30.82.053 50.91C160.1 192.8 96.17 228.2 96 228.3zm368 250.8H240c-70.58 0-128-57.42-128-128v-6.516c10.41 6.496 22.71 10.25 35.87 10.25 15.95 0 31.51-5.801 43.81-16.34l96.06-82.25C336.8 215.1 399.4 191.1 464 191.1c79.4 0 144 64.6 144 144s-64.6 144-144 144zm40-208c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-12.4-10.7-24-24-24z" />
  </svg>
);

export default SvgNarwhal;

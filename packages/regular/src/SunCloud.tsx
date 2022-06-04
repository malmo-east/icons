import * as React from "react";
import { SVGProps } from "react";

const SvgSunCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m353.3 378.5-14.1 78.3-83.2-57.7-83.2 57.7-18-99.63-99.61-18 57.71-84.07-57.67-82.3 99.61-18 18-99.63L256 112.9l83.15-57.75 18.02 99.66 28.82 5.207C402.7 143.8 424.3 131.5 448 128l-49.52-14.48-14.89-82.41c-2.281-12.72-10.76-23.25-22.69-28.22-11.97-4.936-25.42-3.498-36.12 3.844L256 54.49 187.2 6.709c-10.7-7.31-24.1-8.748-36.1-3.813-11.92 4.971-20.4 15.5-22.7 28.19l-14.89 82.44L31.15 128.4c-12.73 2.3-23.296 10.8-28.25 22.8-4.951 11.94-3.5 25.44 3.875 36.06l47.73 68.78-47.75 68.81c-7.359 10.62-8.795 24.12-3.844 36.06 4.969 11.94 15.52 20.44 28.22 22.72l82.39 14.88 14.89 82.41c2.297 12.72 10.78 23.25 22.7 28.22 11.95 4.906 25.44 3.531 36.09-3.844L256 457.5l68.83 47.78c6.47 4.42 13.97 6.72 21.47 6.72 4.906 0 9.859-.969 14.56-2.906 11.92-4.969 20.4-15.5 22.7-28.19l17.76-96.94L384 383.1c-10.8 0-21-1.3-30.7-4.6zM256 192c24.06 0 44.82 13.51 55.74 33.2 10.6-12.18 24.17-21.57 39.63-27.21C331.7 165.7 296.5 144 256 144c-61.85 0-111.1 50.14-111.1 111.1 0 61.85 50.15 111.1 111.1 111.1 20.89 0 40.21-6.095 56.95-16.05-10.69-11.86-18.53-26.25-22.27-42.31-9.98 8.26-21.88 11.26-34.68 11.26-35.28 0-63.99-28.71-63.99-63.99S220.7 192 256 192zm320 31.1c-12 0-23.12 3.5-32.75 9.25C539.8 192.2 505.9 159.1 464 159.1c-38.75 0-71.13 27.63-78.38 64.25-.5 0-1-.25-1.625-.25-35.25 0-64 28.75-64 64s28.75 64 64 64h192c35.25 0 64-28.75 64-64s-28.695-64-63.995-64z" />
  </svg>
);

export default SvgSunCloud;

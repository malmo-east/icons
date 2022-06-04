import * as React from "react";
import { SVGProps } from "react";

const SvgPlanetRinged = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M502.9 9.049c-23.38-23.38-88.39.08-167.1 54.84-25.38-10.5-52.39-15.88-79.77-15.88-114.9 0-207.1 93.09-207.1 207.1 0 27.38 5.368 54.4 15.87 79.77-54.76 78.76-78.21 143.8-54.84 167.1 23.5 23.5 88.33-.017 167.2-54.77 25.25 10.5 52.35 15.83 79.73 15.83 114.9 0 207.1-93.09 207.1-207.1 0-27.38-5.329-54.47-15.83-79.72C502.9 97.38 526.4 32.55 502.9 9.049zM64.01 448c-8.001-8.001 2.375-32.88 25.75-67.38 11.88 15.75 25.88 29.88 41.63 41.63C96.89 445.7 72.01 456 64.01 448zm108.59-56.1c-45.75-28.13-76.63-78.26-76.63-135.9 0-88.26 71.76-160 160-160 57.63 0 107.8 30.88 135.9 76.63-27.5 34.63-63.13 74.63-103.9 115.4C247.1 328.8 207.3 364.4 172.6 391.9zM256 416c-10.88 0-21.75-1.125-32.38-3.25 34.88-28 68.09-57.8 99.71-89.43 31.63-31.63 61.43-64.84 89.43-99.71 2.125 10.63 3.25 21.5 3.25 32.38C416 344.3 344.3 416 256 416zM380.7 89.76c34.5-23.38 59.38-33.75 67.38-25.75 8.001 8.001-2.375 32.88-25.75 67.38-11.83-15.79-25.93-29.79-41.63-41.63z" />
  </svg>
);

export default SvgPlanetRinged;

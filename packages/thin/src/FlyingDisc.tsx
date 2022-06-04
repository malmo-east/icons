import * as React from "react";
import { SVGProps } from "react";

const SvgFlyingDisc = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M423.4 56.75C407.2 40.56 383.9 32 355.1 32c-67 0-155.2 47.38-231.5 123.7C11.8 267.4-31.7 399 24.61 455.3 40.8 471.4 64.11 480 92.02 480c67.01 0 156.1-47.39 232.4-123.7C436.2 244.6 479.7 113 423.4 56.75zM135.5 166.4c62.48-62.48 131.4-100.5 175.1-100.5 13.62 0 24.8 3.688 32.59 11.47 32.78 32.78-7.08 125.8-89.02 207.7-62.48 62.48-131.4 100.5-175.1 100.5-13.62 0-24.8-3.688-32.59-11.47-32.74-32.7 7.12-125.7 89.02-207.7zM313.1 345c-76 75.1-160.8 119-221.08 119-23.1 0-42.48-6.449-56.1-20.07-19.79-19.78-24.22-51.76-15.96-89.57 1.688 11.97 6.514 22.51 15.09 31.09 10.58 10.57 25.77 16.16 43.94 16.16 49.41 0 122.7-41.29 186.6-105.2 77.47-77.41 135-184.4 89.1-230.3-7.459-7.453-17.31-12.28-28.78-14.57C336.4 49.43 346.6 48 355.1 48c23.1 0 42.48 6.449 56.1 20.07 50.1 49.13 4.9 173.13-98.1 276.93z" />
  </svg>
);

export default SvgFlyingDisc;
import * as React from "react";
import { SVGProps } from "react";

const SvgHelmetSafety = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M571.7 357.2c-3.016-3.188-7.219-5.031-11.61-5.031-75.28-.219-544 0-544 0A15.97 15.97 0 0 0 4.45 357.2c-3.031 3.188-4.594 7.531-4.328 11.94C4.359 441.4 170 480 287.1 480h3.281c114.9 0 280.4-39 284.7-110.9 1.119-4.4-.381-8.7-3.381-11.9zM291.5 448c-1.156 0-2.202.25-3.484 0-104.5 0-215.9-30.44-247.4-63.84 61.684.14 420.984-.16 494.784-.06C504 417.3 393.1 448 291.5 448zM48 320c8.84 0 16-7.2 16-16v-29.1c0-89.27 59.69-165.8 144-189.9v187c0 8.8 7.2 16 16 16s16-7.2 16-16V64c0-8.812 7.172-16 16-16h64c8.828 0 16 7.188 16 16v208c0 8.844 7.156 16 15.1 16s16.9-7.2 16.9-16V84.94c84.31 24.1 144 100.7 144 189.9V304c0 8.844 7.156 16 16 16s16.01-7.156 16.01-16l-.01-29.1C544 167.3 469.71 75 365.9 50.8 360.1 30.76 341.8 16 320 16h-64c-21.85 0-40.13 14.76-45.91 34.77C106.3 74.94 32 167.3 32 274.9l-.01 29.1c0 8.8 7.17 16 16.01 16z" />
  </svg>
);

export default SvgHelmetSafety;

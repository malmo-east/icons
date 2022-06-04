import * as React from "react";
import { SVGProps } from "react";

const SvgSection = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M216.1 340.2c20.25-14.02 33.81-33.98 38.11-59.04 14.43-84.11-63.04-106.5-119.6-122.9l-14.51-3.96c-61.29-18.19-77.44-32.66-71.97-64.54 6.842-39.88 59.01-46.23 101.8-39.41 12.5 1.938 27.52 6.064 47.26 12.97 12.53 4.314 26.14-2.219 30.55-14.75 4.373-12.5-2.219-26.19-14.74-30.57-22.52-7.877-40.2-12.66-55.6-15.1C74.15-10.13 11.2 21.4.9 81.63c-6.972 45.47 12.86 72.87 39.23 90.57-20.39 13.88-34.15 33.62-38.42 58.66C-12.53 313.1 65.47 337.1 107.4 349.5l13.84 4.031c70.88 20.47 91.93 32.6 85.75 68.67-6.811 39.91-59.13 46.04-101.9 39.41-19.21-2.906-42.02-11.22-62.13-18.53l-10.84-3.908c-12.4-4.594-26.21 2.031-30.64 14.53-4.467 12.47 2.029 26.22 14.53 30.66l10.56 3.814c22.21 8.094 47.42 17.28 71.19 20.88 12.59 1.971 24.58 2.939 36.14 2.939 64.85 0 111.6-30.54 120.4-81.67 7.6-44.726-10.8-71.926-38.2-90.126zM49.01 238.9c4.707-27.62 31.01-37.12 52.8-40.26 1.881.565 19.51 5.752 19.51 5.752 70.75 20.44 91.81 32.57 85.62 68.61-4.729 27.62-30.95 37.09-52.73 40.24-6.721-2.064-33.23-9.768-33.23-9.768C59.69 285.3 43.54 270.8 49.01 238.9z" />
  </svg>
);

export default SvgSection;

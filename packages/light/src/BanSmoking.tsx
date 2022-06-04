import * as React from "react";
import { SVGProps } from "react";

const SvgBanSmoking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.8 0 0 114.8 0 256s114.8 256 256 256 256-114.8 256-256S397.2 0 256 0zm0 480C132.5 480 32 379.5 32 256c0-56 20.81-107.1 54.91-146.5L201.4 224H128c-17.7 0-32 14.3-32 32v32c0 17.66 14.34 32 32 32h169.4l105.1 105.1C363.1 459.2 312 480 256 480zm-22.6-224 32 32H128v-32h105.4zm191.7 146.5-83.6-83.6c6.1-2.3 10.5-8 10.5-14.9 0-8.8-7.2-16-16-16h-25.38l-32-32H336c8.8 0 16-7.2 16-16s-7.2-16-16-16h-89.4L109.5 86.91C148.9 52.81 199.1 32 256 32c123.5 0 224 100.5 224 224 0 56-20.8 107.1-54.9 146.5zM400 224c-8.8 0-16 7.2-16 16v64c0 8.844 7.156 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16zm-1.1-30.9c8.844 0 16-7.156 16-16 0-35.28-31.44-64-70.06-64h-34.75c-11.41 0-22.16-4.281-29.44-11.78-5.746-5.902-8.807-13.33-8.592-20.89l.092-2.795-.586-.02C270.4 70.14 264.3 64.22 256.5 64h-.452C247.4 64 240.3 70.88 240 79.56c-.438 16.31 5.844 31.97 17.66 44.09 13.28 13.66 32.38 21.47 52.38 21.47h34.75c21 0 38.06 14.34 38.06 32 .05 7.98 7.15 15.98 16.05 15.98z" />
  </svg>
);

export default SvgBanSmoking;

import * as React from "react";
import { SVGProps } from "react";

const SvgIceSkate = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M560 416c-8.799 0-16 7.199-16 16 0 26.51-21.49 48-48 48h-80v-16c0-8.836-7.164-16-16-16s-15.1 7.164-15.1 16l-.9 16H128v-16c0-8.8-7.2-16-16-16s-15.1 7.164-15.1 16l-.9 16H16C7.201 480 .9 487.199.9 495.1S7.201 512 16 512h480c44.18 0 80-35.82 80-80 0-8.8-7.2-16-16-16zm-464 0h352c35.2 0 64-28.8 64-64v-37c0-44.02-30.01-82.42-72.72-93.12L320 192V16c0-8.801-7.199-16-16-16-8.8 0-16 7.199-16 16v16h-6.1c-59.4 0-118.1 11.33-173.2 33.37L62.17 83.98C43.95 91.27 32 108.9 32 128.5V352c0 35.3 28.75 64 64 64zM64 128.6c0-6.535 3.977-12.41 10.04-14.85l40.4-16.2A465.32 465.32 0 0 1 288 64v64h-48c-8.8 0-16 7.2-16 15.1s7.2 16.9 16 16.9h48v32h-48c-8.8 0-16 7.2-16 15.1s7.2 16.9 16 16.9h76.13l115.5 28.88C460.1 259.1 480 285.5 480 314.8V352c0 17.6-14.4 32-32 32H96c-17.6 0-32-14.4-32-32V128.6z" />
  </svg>
);

export default SvgIceSkate;

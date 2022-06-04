import * as React from "react";
import { SVGProps } from "react";

const SvgGif = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32v320zm-80-256h-96c-8.8 0-16 7.2-16 16v160c0 8.844 7.156 16 16 16s16-7.156 16-16v-64h56c8.844 0 16-7.156 16-16s-7.156-16-16-16h-56v-48h80c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-160 0c-8.8 0-16 7.2-16 16v160c0 8.844 7.156 16 16 16s16-7.156 16-16V176c0-8.8-7.2-16-16-16zm-64 80h-64c-8.8 0-16 7.2-16 16s7.156 16 16 16h48v33.45c-24.83 19.91-69.13 18.16-91.48-4.203-24.95-24.95-24.95-65.55 0-90.5 25.03-25 64.19-25 89.22 0 6.25 6.25 16.38 6.25 22.62 0s6.25-16.38 0-22.62c-37.69-37.72-96.78-37.72-134.5 0-37.42 37.42-37.42 98.33 0 135.8C127.8 341.8 153.5 352 180.6 352c27.06 0 52.84-10.25 70.7-28.12 3-2.98 4.7-7.08 4.7-11.28V256c0-8.8-7.2-16-16-16z" />
  </svg>
);

export default SvgGif;

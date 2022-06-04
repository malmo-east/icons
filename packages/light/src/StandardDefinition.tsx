import * as React from "react";
import { SVGProps } from "react";

const SvgStandardDefinition = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32v320zM384 160h-64c-8.844 0-16 7.156-16 16v160c0 8.844 7.156 16 16 16h64c52.94 0 96-43.06 96-96s-43.1-96-96-96zm0 160h-48V192h48c35.28 0 64 28.7 64 64s-28.7 64-64 64zm-188.4-79.6-8.312-2C144.4 227.9 142.5 220.3 144.5 210.6c2.969-14.36 28.88-21.72 61.78-17.41 7.749 1.016 17.09 3.125 29.31 6.656 8.562 2.375 17.34-2.453 19.81-10.95 2.438-8.484-2.469-17.36-10.94-19.8-13.86-3.996-24.66-6.396-34.06-7.596-53.3-6.9-90.5 9.9-97.2 42.6-9.7 46.7 39.9 58 66.5 65.4l8.531 2.047c43.53 10.36 54.06 16.5 51.31 29.84-3 14.36-29 21.67-61.84 17.39-11.97-1.5-26.06-5.734-38.5-9.453L132.5 307.3c-9.4-2.5-17.3 2.4-19.8 10.9s2.344 17.38 10.81 19.86l6.531 1.953c13.63 4.078 29.06 8.719 43.63 10.53 7.75 1.016 14.99 1.516 22.05 1.516 40.66 0 69.39-16.28 75.17-44.14C280.7 260.6 231.5 248.9 195.6 240.4z" />
  </svg>
);

export default SvgStandardDefinition;
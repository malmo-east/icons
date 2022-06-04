import * as React from "react";
import { SVGProps } from "react";

const SvgChessRook = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368 32h-56c-8.875 0-16 7.125-16 16v48h-48V48c0-8.875-7.125-16-16-16h-80c-8.875 0-16 7.125-16 16v48H88.12V48c0-8.875-7.25-16-16-16H16C7.125 32 0 39.12 0 48v176l64 32c0 48.38-1.5 95-13.25 160h282.5C321.5 351 320 303.8 320 256l64-32V48c0-8.88-7.1-16-16-16zM224 320h-64v-64c0-17.62 14.38-32 32-32s32 14.38 32 32v64zm112 128H47.1C21.49 448 0 469.5 0 495.1c0 9.7 7.163 16.9 16 16.9h352c8.837 0 16-7.163 16-16 0-26.5-21.5-48-48-48z" />
  </svg>
);

export default SvgChessRook;

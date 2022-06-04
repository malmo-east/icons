import * as React from "react";
import { SVGProps } from "react";

const SvgPuzzlePieceSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 256c0 35.35-21.49 64-48 64-32.43 0-31.72-32-55.64-32-13.46 0-24.36 10.9-24.36 24.4V416c0 17.67-14.33 32-32 32H376.4c-13.5 0-24.4-10.9-24.4-24.4 0-24.5 32-23.2 32-55.6 0-26.51-28.65-48-64-48s-64 21.49-64 48c0 32.43 32 31.72 32 55.64 0 13.46-10.9 24.36-24.4 24.36H160c-17.67 0-32-14.33-32-32V312.4c0-13.5-10.9-24.4-24.4-24.4-23.65 0-23.2 32-55.6 32C21.49 320 .9 291.35.9 256s20.59-64.9 47.1-64.9c32.43 0 31.72 32 55.64 32 13.46 0 24.36-10 24.36-23.5V95.1c0-16.77 14.3-32 32-32h103.6c13.5 0 24.4 11.8 24.4 25.26 0 23.64-32 23.24-32 54.74 0 27.4 28.7 48.9 64 48.9s64-21.49 64-48c0-32.43-32-31.72-32-55.64C352 74.91 362.91 64 376.36 64L480 63.1c17.67 0 32 14.33 32 32v103.6c0 13.45 10.91 24.36 24.36 24.36 23.69 0 23.24-32 55.64-32 26.5.04 48 29.64 48 64.94z" />
  </svg>
);

export default SvgPuzzlePieceSimple;

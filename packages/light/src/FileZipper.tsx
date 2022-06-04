import * as React from "react";
import { SVGProps } from "react";

const SvgFileZipper = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M365.3 125.3 258.8 18.8C246.7 6.742 230.5 0 213.5 0H64C28.65 0 0 28.65 0 64l.006 384c0 35.35 28.65 64 64 64H320c35.35 0 64-28.65 64-64V170.5c0-17-6.7-33.2-18.7-45.2zM224 34.08c4.477 1.566 8.666 3.846 12.12 7.299l106.5 106.5c3.48 3.421 5.78 7.621 7.28 12.121H240c-8.8 0-16-7.2-16-16V34.08zM352 448c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V64c0-17.67 14.33-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256zM144 128H80c-8.84 0-16 7.2-16 16s7.16 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0-64H80c-8.84 0-16 7.16-16 16s7.16 16 16 16h64c8.8 0 16-7.16 16-16s-7.2-16-16-16zm0 128H80c-8.84 0-16 7.2-16 16s7.16 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 64H80c-8.84 0-16 7.2-16 16v48c0 26.47 21.53 48 48 48s48-21.5 48-48v-48c0-8.8-7.2-16-16-16zm-16 64c0 8.828-7.188 16-16 16s-16-7.2-16-16v-32h32v32z" />
  </svg>
);

export default SvgFileZipper;

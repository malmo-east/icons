import * as React from "react";
import { SVGProps } from "react";

const SvgSquareRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M448 416V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.3 0 64-28.7 64-64zM64 448c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320c0 17.64-14.36 32-32 32H64zm292.3-163.7c15.12-15.12 15.33-41.25-.203-56.75l-95.8-92.5a39.942 39.942 0 0 0-43.59-8.688C201.7 132.6 192 147.1 192 163.3V192h-72c-22.06 0-40 17.9-40 40v48c0 22.1 17.94 40 40 40h72v28.69c0 16.25 9.688 30.75 24.69 36.97 14.95 6.188 32 2.812 43.48-8.562L356.3 284.3zM224 348.7V288H120c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h104v-60.7c0-6.414 8.048-11.26 13.86-5.471l95.8 92.5c4.205 4.162 1.796 9.532.203 11.12l-96 92.69C233 359 224 356.1 224 348.7z" />
  </svg>
);

export default SvgSquareRight;

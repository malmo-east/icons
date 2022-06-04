import * as React from "react";
import { SVGProps } from "react";

const SvgFileMedical = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M374.6 150.6 233.3 9.3C227.4 3.371 219.2 0 210.7 0H64C28.65 0 0 28.65 0 64l.006 384c0 35.34 28.65 64 64 64H320c35.35 0 64-28.66 64-64V173.3c0-8.5-3.4-16.7-9.4-22.7zM224 22.63 361.4 160H248c-13.2 0-24-10.8-24-24V22.63zM368 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h144v120c0 22.06 17.94 40 40 40h120v272zM232 232c0-8.828-7.172-16-16-16h-48c-8.828 0-16 7.172-16 16v48h-48c-8.828 0-16 7.172-16 16v48c0 8.828 7.172 16 16 16h48v48c0 8.828 7.172 16 16 16h48c8.828 0 16-7.172 16-16v-48h48c8.828 0 16-7.172 16-16v-48c0-8.828-7.172-16-16-16h-48v-48zm48 64v48h-64v64h-48v-64h-64v-48h64v-64h48v64h64z" />
  </svg>
);

export default SvgFileMedical;
import * as React from "react";
import { SVGProps } from "react";

const SvgUserLock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M592 288h-16v-75.3c0-41.84-30.03-80.04-71.66-84.27a82.444 82.444 0 0 0-8.336-.423C451.9 127.1 416 163.9 416 208v80h-16c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h192c26.4 0 48-21.6 48-48V336c0-26.4-21.6-48-48-48zm-96 144c-17.62 0-32-14.38-32-32s14.38-32 32-32 32 14.38 32 32-14.4 32-32 32zm32-144h-64v-80c0-17.62 14.38-32 32-32s32 14.38 32 32v80zm-304-32c70.69 0 128-57.31 128-128S294.69 0 224 0 96 57.31 96 128c0 70.7 57.3 128 128 128zm0-208c44.11 0 80 35.89 80 80s-35.89 80-80 80-80-35.9-80-80c0-44.11 35.9-80 80-80zm96 416c0 18.08 6.256 34.59 16.41 48H32c-17.67 0-32-14.33-32-32 0-97.2 78.8-176 176-176h96c18.09 0 35.54 2.748 51.97 7.818C321.5 319.5 320 327.5 320 336v25.52c-14.9-6.02-31.9-9.52-48-9.52h-96c-65.16 0-119.1 48.95-127 112h271z" />
  </svg>
);

export default SvgUserLock;
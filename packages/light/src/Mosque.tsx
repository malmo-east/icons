import * as React from "react";
import { SVGProps } from "react";

const SvgMosque = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M400 0c5 0 9.8 2.371 12.8 6.4 34.7 46.3 78.1 74.94 133.5 111.5 5.3 3.5 10.6 7 16 10.6 29 19.2 45.7 51.7 45.7 86.1 0 28.5-11.4 54.4-29.8 73.4 34.3 1.2 61.8 29.4 61.8 64v96c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-96c0-34.6 27.5-62.8 61.8-64-18.4-19-29.8-44.9-29.8-73.4 0-34.4 16.7-66.9 45.7-86.1 5.4-3.6 10.8-7.1 16-10.6 55.4-36.56 98.8-65.2 133.5-111.5 3-4.029 6.9-6.4 12.8-6.4zm32 480v-56c0-10.1-4.7-19.6-12.8-25.6L400 384l-19.2 14.4c-8.1 6-12.8 15.5-12.8 25.6v56h64zm32 0h48v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80h32c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h32v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v80h48v-56c0-20.1 9.5-39.1 25.6-51.2L400 344l38.4 28.8c16.1 12.1 25.6 31.1 25.6 51.2v56zm80.6-324.8c-5.5-3.7-11.1-7.4-16.5-10.9v-.1h-.1c-48.6-32-92.1-60.7-128-102.64-35.9 41.94-79.4 70.64-128.1 102.64-5.4 3.6-11.8 7.3-16.5 11-19.7 13-31.4 35.4-31.4 59.4 0 40.5 32.9 73.4 73.4 73.4h205.2c40.5 0 73.4-32.9 73.4-73.4 0-24-11.7-46.4-31.4-59.4zM70.4 5.2a16 16 0 0 1 19.2 0l16 12C139.8 42.88 160 83.19 160 126v146c0 8.8-7.2 16-16 16s-16-7.2-16-16V160H32v288c0 17.7 14.33 32 32 32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-35.35 0-64-28.7-64-64V126C0 83.19 20.15 42.88 54.4 17.2l16-12zM32 128h96v-2c0-32.73-15.4-63.56-41.6-83.2L80 38l-6.4 4.8A104 104 0 0 0 32 126v2z" />
  </svg>
);

export default SvgMosque;

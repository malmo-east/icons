import * as React from "react";
import { SVGProps } from "react";

const SvgSkull = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M224 256c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm-64-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm128 48c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64zm64 48c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zM144 512c-26.5 0-48-21.5-48-48v-64c0-.4 0-.7.01-1.1C37.48 357.8 0 294.7 0 224 0 100.3 114.6 0 256 0s256 100.3 256 224c0 70.7-37.5 133.8-96.9 174.9 0 .4.9.7.9 1.1v64c0 26.5-21.5 48-48 48H144zm352-288c0-112.9-105.4-208-240-208S16 111.1 16 224c0 64.8 34.3 123.3 89.2 161.8 4.4 3 6.9 8.1 6.8 13.4V464c0 17.7 14.3 32 32 32h40v-48c0-4.4 3.6-8 8-8s8 3.6 8 8v48h48v-48c0-4.4 3.6-8 8-8s8 3.6 8 8v48h48v-48c0-4.4 3.6-8 8-8s8 3.6 8 8v48h40c17.7 0 32-14.3 32-32v-64l-.9-.8c.8-5.3 3.3-10.3 7.7-13.4 54.9-38.5 89.2-97 89.2-161.8z" />
  </svg>
);

export default SvgSkull;
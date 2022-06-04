import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsMinimize = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M200 32c-13.2 0-24 10.75-24 24v86.06L56.97 23.03c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L142.1 176H56c-13.25 0-24 10.8-24 24s10.8 24.06 24.05 24.06L200 224c3.135 0 6.248-.64 9.182-1.855a24.018 24.018 0 0 0 12.96-12.97A23.458 23.458 0 0 0 224 200l.055-143.9C224.1 42.81 213.3 32 200 32zm102.8 190.1c3 1.3 6.1 1.9 9.2 1.9l143.9.058C469.2 224.1 480 213.3 480 200s-10.7-24-24-24h-86.06l119-119c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0L336 142.1V56c0-13.25-10.7-24-24-24s-24.05 10.81-24.05 24.06L288 200c0 3.133.64 6.25 1.855 9.18C292.3 215 296.1 219.7 302.8 222.1zM369.9 336H456c13.25 0 24-10.75 24-24s-10.81-24.06-24.06-24.06L312 288c-3.135 0-6.248.64-9.182 1.855a24.018 24.018 0 0 0-12.96 12.97A23.458 23.458 0 0 0 288 312l-.057 143.9C287.9 469.2 298.8 480 312 480s24-10.75 24-24v-86.06l119 119c9.375 9.375 24.56 9.375 33.94 0s9.375-24.56 0-33.94L369.9 336zm-160.7-46.1c-3-1.3-6.1-1.9-9.2-1.9l-143.94-.1C42.81 287.9 32 298.8 32 312s10.75 24 24 24h86.06l-119 119c-9.375 9.375-9.375 24.56 0 33.94s24.56 9.375 33.94 0L176 369.9V456c0 13.3 10.8 24 24 24s24.06-10.81 24.06-24.06L224 312c0-3.133-.64-6.25-1.855-9.18C219.7 296.1 215 292.3 209.2 289.9z" />
  </svg>
);

export default SvgArrowsMinimize;
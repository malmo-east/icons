import * as React from "react";
import { SVGProps } from "react";

const SvgMonkey = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M160 416c0-89.7 61.4-165 144.5-186.1C329.1 265 369.9 288 416 288c9.8 0 19.4-1.9 28.7-3.9l81.8 78.9c31.6 30.2 49.5 72 49.5 115.8v1.2c0 17.7-14.3 32-32 32s-32-14.3-32-32v-1.2c0-26.3-10.7-51.4-29.7-69.5L416 346.1V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H160C71.63 512 0 440.4 0 352V110.1C0 49.31 49.3 0 110.1 0h10.4c57.2 0 102.8 47.77 100.1 104.9-2.2 48.2-38.6 87.9-86.4 94.5l-1.8.3c-17.5 2.4-33.69-9.8-36.1-27.3-2.41-17.5 9.8-33.7 27.3-36.1l1.9-.3c17.3-2.3 30.4-16.7 31.2-34.1 1-20.64-15.5-37.9-36.2-37.9h-10.4c-25.45 0-47 20.65-47 46.1V352c0 53 43 96 96 96l.9-32zm208-304c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm96 0c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zm-48 144c-29.3 0-55.9-12.2-74.8-31.7-8.9-9.3-16.2-20.2-22.1-32.3-34.5-.9-63.1-28.7-63.1-64 0-35.34 28.6-63.98 63.1-64C335.6 26.42 372.7 0 416 0c43.3 0 80.4 26.42 96 64 35.4.02 64 28.66 64 64 0 35.3-28.6 63.1-64 64-15.6 37.6-52.7 64-96 64zM384 64c-26.5 0-48 21.49-48 48 0 23.8 17.3 43.5 40 47.3v8.7c0 22.1 17.9 40 40 40s40-17.9 40-40v-8.7c22.7-3.8 40-23.5 40-47.3 0-26.51-21.5-48-48-48h-64z" />
  </svg>
);

export default SvgMonkey;
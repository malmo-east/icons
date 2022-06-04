import * as React from "react";
import { SVGProps } from "react";

const SvgPersonBooth = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M192 496c0 8.8 7.2 16 16 16h16c8.75 0 16-7.25 16-16V320h-48v176zM63.62 128c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zM224.3 232h-54.4l-47.7-47.6C111.8 173.8 97.75 168 82.75 168H56.12c-31 0-56.22 25.1-56.1 56.1L0 488c0 13.2 10.75 24 24 24s24-10.75 24-24l.25-117.9c.125.125.5.25.75.5.25.125.25.375.5.5l51.38 38.38c2 1.5 3.25 3.875 3.25 6.375v72c0 13.25 10.75 24 23.1 24 13.12 0 24-10.75 24-24v-72c0-17.63-8.375-34.38-22.5-44.75L111.8 357.8V241.5l26.62 26.75C145.8 275.8 156.2 280 166.8 280h57.5c13.25 0 24-10.75 24-24 0-13.2-10.8-24-24-24zM544 0H224c-17.8 0-32 14.25-32 32v160h48V48.12l84.75 204.6C301.8 285.1 264 342.8 264 372c0 41.88 34.13 76 76 76 14.25 0 28.12-4.125 40-11.5 23.75 15 56.25 15 80 0 11.9 7.5 25.8 11.5 40 11.5 9.875 0 19.25-1.999 28-5.5V496c0 8.75 7.25 16 16 16h16c8.75 0 16-7.25 16-16V32c0-17.75-14.2-32-32-32zm-16 372c0 15.38-12.62 28-28 28-8.25 0-16-3.75-21.5-10.38-4.625-5.5-11.25-8.875-18.5-8.875S445.1 384 441.5 389.6c-10.88 13.13-32.13 13.13-42.88 0-9.125-11.12-27.87-11.12-37.13 0C356 396.2 348.2 400 340 400c-15.38 0-28-12.62-28-27.75.75-12.25 28.5-60 59.25-102 5-6.875 6-15.62 2.875-23.5L291.9 48H528v324z" />
  </svg>
);

export default SvgPersonBooth;

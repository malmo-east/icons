import * as React from "react";
import { SVGProps } from "react";

const SvgDeer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m488.8 133.2-92-25.75 11.12-5.624c12.37-6.125 23-15.63 30.75-27.13l18.12-27.13c2.5-3.75 1.552-8.646-2.198-11.15l-13.27-8.875c-3.75-2.5-8.656-1.479-11.16 2.146l-18 27.25C407.5 64 401.1 69.64 393.6 73.26L351 94.63l-33.75-9.5 8.266-10.39C332.3 66.23 336 55.75 336 44.75V8c0-4.375-3.625-8-8-8h-16c-4.375 0-8 3.625-8 8v36.75c0 3.625-1.25 7.125-3.5 9.1l-16.75 21-16.12-4.498c-6.875-2-11.76-8.252-11.76-15.5l.042-47.75c0-4.375-3.625-8-8-8L231.9 0c-4.375 0-8 3.625-8 8v47.75c0 21.5 14.38 40.5 35 46.25l78.88 22.25L304 192H64c-35.25 0-64 28.8-64 64v63.1l32-20.3v48.81l-11.88 31.75c-4.625 12.25-5.375 25.38-2.25 38l24.88 82.56C44.62 507 51 512 58.25 512h63.87c10.38 0 18-9.75 15.5-19.87L111.2 403.8l19.6-51.8H288v144c0 8.75 7.25 15.1 15.1 15.1l64.9.9c8.75 0 16-7.25 16-16V288l32-64h64c17.75 0 32-14.25 32-32v-27.9c0-14.4-9.6-26.9-23.2-30.9zm-73.7 41.9c-8.75 0-16-7.25-16-16s7.25-16 16-16 16 7.25 16 16-6.3 16-16 16z" />
  </svg>
);

export default SvgDeer;

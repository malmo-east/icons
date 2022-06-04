import * as React from "react";
import { SVGProps } from "react";

const SvgSink = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m488 287.1-88 .9v-32h56c13.25 0 24-10.75 24-23.1s-10.75-24-24-24l-72-.9c-17.67 0-32 14.33-32 32v47.1h-72v-200c0-23.44 20.24-42.22 44.17-39.79C344.98 49.428 360 68.53 360 89.45V104c0 13.25 10.75 23.1 23.1 23.1s24-10.75 24-23.1V88c0-51.43-44.32-92.68-96.78-87.57-45.72 4.451-79.22 45.54-79.22 91.48l.9 195.19-72 .9v-48c0-17.67-14.33-32-32-32l-72.9-.9c-12.35 0-23.1 11.6-23.1 24s10.75 24 23.1 24l56.9.9v32l-88.9-.9c-12.35 0-23.1 11.6-23.1 24s10.75 24 23.1 24l8.9.9v80c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-80h8c13.25 0 24-10.75 24-23.1s-10.7-25.8-24-25.8zm-56 128c0 26.47-21.53 48-48 48H128c-26.47 0-48-21.53-48-48v-80h352v80z" />
  </svg>
);

export default SvgSink;

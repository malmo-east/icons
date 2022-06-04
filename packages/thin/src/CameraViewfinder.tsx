import * as React from "react";
import { SVGProps } from "react";

const SvgCameraViewfinder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M152 0c4.4 0 8 3.582 8 8 0 4.42-3.6 8-8 8H40c-13.25 0-24 10.75-24 24v112c0 4.4-3.58 8-8 8-4.418 0-8-3.6-8-8V40C0 17.91 17.91 0 40 0h112zm360 152c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-13.25-10.7-24-24-24H360c-4.4 0-8-3.58-8-8 0-4.418 3.6-8 8-8h112c22.1 0 40 17.91 40 40v112zM320 256c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64 64 28.7 64 64zm-64-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm69.8-96.4L332 128h36c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h36l6.2-16.4c3.5-9.4 12.4-15.6 22.4-15.6h94.8c10 0 18.9 6.2 22.4 15.6zM144 144c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32h-47.1l-10-26.8c-1.2-3.1-4.2-5.2-7.5-5.2h-94.8c-3.3 0-6.3 2.1-7.5 5.2l-10 26.8H144zM0 360c0-4.4 3.582-8 8-8 4.42 0 8 3.6 8 8v112c0 13.3 10.75 24 24 24h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H40c-22.09 0-40-17.9-40-40V360zm360 152c-4.4 0-8-3.6-8-8s3.6-8 8-8h112c13.3 0 24-10.7 24-24V360c0-4.4 3.6-8 8-8s8 3.6 8 8v112c0 22.1-17.9 40-40 40H360z" />
  </svg>
);

export default SvgCameraViewfinder;
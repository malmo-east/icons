import * as React from "react";
import { SVGProps } from "react";

const SvgDisplayArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M208 176a15.933 15.933 0 0 0-11.31 4.688c-6.25 6.25-6.25 16.38 0 22.62l80 80c6.25 6.25 16.38 6.25 22.62 0l80-80c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0L304 233.4V16c0-8.844-7.2-16-16-16s-16 7.156-16 16v217.4l-52.7-52.7c-3.1-3.1-7.2-4.7-11.3-4.7zM512 0H368c-8.8 0-16 7.162-16 16 0 8.84 7.2 16 16 16h144c17.67 0 32 14.33 32 32v288c0 17.67-14.33 32-32 32H64c-17.67 0-32-14.33-32-32V64c0-17.67 14.33-32 32-32h144c8.8 0 16-7.16 16-16 0-8.838-7.2-16-16-16H64C28.65 0 0 28.65 0 64v288c0 35.35 28.65 64 64 64h149.7l-19.2 64H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.836 0 16-7.164 16-16s-7.2-16-16-16h-50.49l-19.2-64H512c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zM227.9 480l19.2-64h81.79l19.2 64H227.9z" />
  </svg>
);

export default SvgDisplayArrowDown;

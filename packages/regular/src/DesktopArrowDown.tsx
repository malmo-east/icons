import * as React from "react";
import { SVGProps } from "react";

const SvgDesktopArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M191 103c-9.375 9.375-9.375 24.56 0 33.94l80 80c9.375 9.375 24.56 9.375 33.94 0l80-80c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-39 39.1V24c0-13.25-10.7-24-24-24s-24 10.75-24 24v118.1L224.1 103c-3.8-4.66-9.9-7-16.1-7s-12.3 2.34-17 7zM512 0H352v48h160c8.822 0 16 7.178 16 16v192H48V64c0-8.822 7.178-16 16-16h160V0H64C28.65 0 0 28.65 0 64v288c0 35.35 28.65 64 64 64h148.3l-9.6 48H152c-13.2 0-24 10.8-24 24s10.8 24 24 24h272c13.25 0 24-10.75 24-24s-10.75-24-24-24h-50.73l-9.57-48H512c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zM251.7 464l9.6-48h53.46l9.6 48H251.7zM528 352c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16v-48h480v48z" />
  </svg>
);

export default SvgDesktopArrowDown;

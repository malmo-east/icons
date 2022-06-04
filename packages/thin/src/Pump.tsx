import * as React from "react";
import { SVGProps } from "react";

const SvgPump = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 216H448c-4.48 0-8 3.584-8 8s3.5 8 8 8h128c4.48 0 8-3.584 8-8s-3.5-8-8-8zm0-120H467.5c-12.8 0-25.3 3.74-35.5 10.8l-51.52 34.24C362.6 152.9 352 172.9 352 194.2V224h-64V64c17.6 0 32-14.34 32-32S305.6 0 288 0H128c-17.6 0-32 14.34-32 32s14.4 32 32 32v160H64c0-17.66-14.4-32-32-32S0 206.3 0 224v160c0 17.66 14.4 32 32 32s32-14.34 32-32h288v29.76c0 21.38 10.56 41.38 28.48 53.25L432 501.2c10.2 7.1 22.7 10.8 35.5 10.8H576c35.2 0 64-28.64 64-64V160c0-35.4-28.8-64-64-64zM48 384c0 8.832-7.039 16-16 16s-16-7.2-16-16V224c0-8.832 7.039-16 16-16s16 7.2 16 16v160zm64-352c0-8.832 7.039-16 16-16h160c8.961 0 16 7.168 16 16s-7.9 16-16 16H128c-9 0-16-7.17-16-16zm240 336H64V240h64c8.961 0 16-7.168 16-16V64h128v160c0 8.832 7.039 16 16 16h64v128zm272 80c0 26.5-21.44 48-48 48H467.5c-9.598 0-18.88-2.816-26.88-8.064l-51.2-34.24A47.861 47.861 0 0 1 368 413.8V194.2c0-16.03 8-31.04 21.44-39.94l51.2-34.24A48.901 48.901 0 0 1 467.5 112H576c26.56 0 48 21.5 48 48v288zm-48-152H448c-4.48 0-8 3.584-8 8s3.5 8 8 8h128c4.48 0 8-3.584 8-8s-3.5-8-8-8zm0 80H448c-4.48 0-8 3.584-8 8s3.52 8 8 8h128c4.48 0 8-3.584 8-8s-3.5-8-8-8z" />
  </svg>
);

export default SvgPump;

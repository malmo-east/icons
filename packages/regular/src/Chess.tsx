import * as React from "react";
import { SVGProps } from "react";

const SvgChess = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M497.6 279.1c9-5.9 14.4-15.9 14.4-26.6V192c0-17.6-14.4-32-32-32H288c-17.6 0-32 14.4-32 32v60.5c0 10.88 5.5 21 12.75 25.5L296 299.6v74.75c-5 4.55-8 10.85-8 17.65v24l-25.62 19.25C258.4 438.2 256 443 256 448c0-5-2.375-9.75-6.375-12.75L224 416v-24c-.125-10.38-6.875-19.5-16.88-22.5-3.75-25-6.375-50.25-6.375-75.5v-38H208c8.8 0 16-7.2 16-16v-16c0-8.837-7.163-16-16-16h-3.1l26.88-80.38a23.875 23.875 0 0 0 1.269-7.67c0-11.89-9.075-23.95-24.91-23.95H144.8V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16V15.1c0-7.9-7.2-15.1-16-15.1s-16 7.2-16 15.1V32H96.86c-8.8 0-16.11 7.2-16.11 15.1s7.2 16.9 16 16.9h16.05v32l-63.41-.9c-15.54 0-24.91 11.86-24.91 23.95 0 2.567.416 5.155 1.269 7.671L52.75 208H48c-8.84 0-16 7.2-16 16v16c0 8.8 7.16 16 16 16h8.75v38c0 25.12-2.5 50.25-6.375 75.12C39.88 371.8 32 380.8 32 392v24L6.37 435.26C2.358 438.3 0 442.1 0 448v48c0 8.8 7.163 16 16 16h224c8.875 0 16-7.125 16-16 0 8.875 7.125 16 16 16h224c8.837 0 16-7.163 16-16v-48a15.93 15.93 0 0 0-6.365-12.74L480 416v-24c0-6.75-3-13.12-8-17.62V299.5l25.6-20.4zM175.8 144l-21.5 64h-50.9l-21.5-64h93.9zm-17 224H98.88c3.5-25.25 5.875-50.13 5.875-73.1V256h48v38c.045 23.9 2.345 48.8 6.045 74zM48 464l32-24v-24h96v24l32 24H48zm256 0 32-24v-24h96v24l32 24H304zm160-219.4-40 31.75V368h-80v-91.6l-40-31.5V208h32v24h32v-24h32v24h32v-24h32v36.6zM384 288c-8.875 0-16 7.125-16 16v32h32v-32c0-8.9-7.1-16-16-16z" />
  </svg>
);

export default SvgChess;

import * as React from "react";
import { SVGProps } from "react";

const SvgScannerKeyboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M128 23.1c0-12.36 10.7-23.102 24-23.102S176 10.74 176 23.1v40h-48v-40zm176 0c0-12.36 10.7-23.102 24-23.102S352 10.74 352 23.1v40h-48v-40zm-48-8v48h-32v-48c0-7.938 7.2-15.102 16-15.102s16 7.164 16 15.102zm128 0c0-7.938 7.2-15.102 16-15.102s16 7.164 16 15.102v256c0 9.7-7.2 16-16 16s-16-6.3-16-16v-256zm128 8v240c0 14.2-10.7 24-24 24s-24-9.8-24-24v-240c0-12.36 10.7-23.102 24-23.102S512 10.74 512 23.1zm-264 152c13.3 0 24 11.6 24 24v32c0 14.2-10.7 24-24 24H104c-13.25 0-24-9.8-24-24v-32c0-12.4 10.75-24 24-24h144zm-104 128c8.8 0 16 8.1 16 16v16c0 9.7-7.2 16-16 16H96c-8.84 0-16-6.3-16-16v-16c0-7.9 7.16-16 16-16h48zm-64 96c0-7.9 7.16-16 16-16h48c8.8 0 16 8.1 16 16v16c0 9.7-7.2 16-16 16H96c-8.84 0-16-6.3-16-16v-16zm176-96c8.8 0 16 8.1 16 16v16c0 9.7-7.2 16-16 16h-48c-8.8 0-16-6.3-16-16v-16c0-7.9 7.2-16 16-16h48zm-64 96c0-7.9 7.2-16 16-16h48c8.8 0 16 8.1 16 16v16c0 9.7-7.2 16-16 16h-48c-8.8 0-16-6.3-16-16v-16zm96-304c35.3 0 64 29.6 64 64v288c0 36.2-28.7 64-64 64H64c-35.35 0-64-27.8-64-64v-288c0-34.4 28.65-64 64-64h224zm-224 48c-8.84 0-16 8.1-16 16v288c0 9.7 7.16 16 16 16h224c8.8 0 16-6.3 16-16v-288c0-7.9-7.2-16-16-16H64z" />
  </svg>
);

export default SvgScannerKeyboard;

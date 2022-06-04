import * as React from "react";
import { SVGProps } from "react";

const SvgNfcSignal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M488 304c13.3 0 24-10.7 24-24s-10.7-24-24-24c-127.9 0-232 104.1-232 232 0 13.25 10.75 24 24 24s24-10.75 24-24c0-101.5 82.5-184 184-184zM144 128H96v256h149.4c21.9-50.9 58.7-93.4 106.6-121.8V128H240v82.94c18.6 6.611 32 24.19 32 45.06 0 26.51-21.49 48-48 48s-48-21.5-48-48c0-20.87 13.4-38.45 32-45.06V112c0-8.8 7.2-16 16-16h128c17.64 0 32 14.36 32 32v117.4c20.15-8.672 41.65-14.64 64-18.06V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h160.4c.668-22.12 4.02-43.55 9.83-64H96c-17.64 0-32-14.36-32-32V128c0-17.64 14.36-32 32-32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16zm344 224c-75 0-136 61-136 136 0 13.25 10.75 24 24 24s24-10.75 24-24c0-48.53 39.47-88 88-88 13.25 0 24-10.75 24-24s-10.7-24-24-24zm-30.6 105.4c-12.5 12.5-12.5 32.76 0 45.25 12.5 12.5 32.76 12.5 45.25 0 12.5-12.5 12.5-32.76 0-45.25-12.55-12.5-32.75-12.5-45.25 0z" />
  </svg>
);

export default SvgNfcSignal;

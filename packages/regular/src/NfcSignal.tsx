import * as React from "react";
import { SVGProps } from "react";

const SvgNfcSignal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M488 304c13.3 0 24-10.7 24-24s-10.7-24-24-24c-127.9 0-232 104.1-232 232 0 13.25 10.75 24 24 24s24-10.75 24-24c0-101.5 82.5-184 184-184zm-30.6 153.4c-12.5 12.5-12.5 32.76 0 45.25 12.5 12.5 32.76 12.5 45.25 0 12.5-12.5 12.5-32.76 0-45.25-12.55-12.5-32.75-12.5-45.25 0zM488 352c-75 0-136 61-136 136 0 13.25 10.75 24 24 24s24-10.75 24-24c0-48.53 39.47-88 88-88 13.25 0 24-10.75 24-24s-10.7-24-24-24zM48 416V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16v143.4c15.41-5.471 31.44-9.506 48-12.04V96c0-35.35-28.65-64-64-64H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h160.4c.496-16.41 2.336-32.47 5.707-48H64c-8.82 0-16-7.2-16-16zm80-64V160h8c13.3 0 24-10.7 24-24s-10.7-24-24-24h-18.7C96.75 112 80 128.8 80 149.3v213.3c0 20.7 16.75 37.4 37.3 37.4h122.1c5.99-16.86 13.62-32.9 22.75-48H128zm240-98.9V149.3c0-20.5-16.7-37.3-37.3-37.3H224c-13.25 0-24 10.75-24 24v78.66c-14.3 7.44-24 23.64-24 41.34 0 26.51 21.49 48 48 48s48-21.49 48-48c0-17.72-9.713-33.03-24-41.34V160h72v124.5c14.7-12.2 30.9-22.6 48-31.4z" />
  </svg>
);

export default SvgNfcSignal;
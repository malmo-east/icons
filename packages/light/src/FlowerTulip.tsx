import * as React from "react";
import { SVGProps } from "react";

const SvgFlowerTulip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M495.9 288h-47.26c-69.01 0-134.1 31.62-176.7 86v-86c79.51 0 144-64.5 144-144V16c0-5.999-3.375-11.5-8.751-14.25-5.376-2.75-11.88-2.125-16.75 1.375L316.6 56.75l-48.38-51C265.3 2.125 260.8 0 256 0c-4.8 0-9.3 2.125-12.3 5.75l-48.38 51L121.5 3.125C116.6-.375 110.1-1 104.7 1.75 99.35 4.5 95.98 10 95.98 16v128c0 79.5 64.51 144 144 144v86c-42.48-54.4-107.58-86-176.63-86H16.09c-9.128 0-17.004 9-16.004 19.6C9.962 422.1 106.4 512 223.9 512h64.26c117.5 0 213.9-89.88 223.8-204.4C512.9 297 505 288 495.9 288zM127.1 144V47.38l71.26 51.75L256 39.25l56.76 59.88 71.26-51.75V144c0 61.88-50.13 112-112 112H239.1c-61 0-112-50.1-112-112zm112 336h-15.2c-93.89 0-174.7-69.13-190-160h29.5c67.64 0 130.3 35.38 165 93.38C241.1 436.1 239.1 454 239.1 480zm48.9 0h-16c0-25.1-2-43.88 11.63-66.63C318.4 355.4 381 320 448.7 320h29.5C462.8 410.9 382 480 288 480z" />
  </svg>
);

export default SvgFlowerTulip;
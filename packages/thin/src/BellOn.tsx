import * as React from "react";
import { SVGProps } from "react";

const SvgBellOn = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M312 8c0-4.418 3.6-8 8-8s8 3.582 8 8v24l-.9.2C412.6 36.36 480 106.3 480 192v36.6c0 41.8 14.2 81.5 40.3 115l16.8 20.9c4.5 5.6 6.9 12.6 6.9 19.8 0 17.5-14.2 31.7-31.7 31.7H127.7c-17.5 0-31.7-14.2-31.7-31.7 0-7.2 2.45-14.2 6.9-19.8l16.8-20.9c26.1-33.5 40.3-73.2 40.3-115V192c0-85.7 67.4-155.64 152-159.8V8zm8 40c-79.5 0-144 64.5-144 144v36.6c0 45.5-15.5 89.5-43.8 125l-16.8 20.9c-2.2 2.8-3.4 6.2-3.4 9.8 0 7.8 7 15.7 15.7 15.7h384.6c7.8 0 15.7-7.9 15.7-15.7 0-3.6-1.2-7-3.4-9.8l-16.8-20.9c-28.3-35.5-43.8-79.5-43.8-125V192c0-79.5-64.5-144-144.9-144h.9zm-33.9 433.9c9 9 21.2 14.1 33.9 14.1s24.9-5.1 33.9-14.1S368 460.7 368 448c0-4.4 3.6-8 8-8s8 3.6 8 8c0 16.1-6.7 33.3-18.7 45.3S336.1 512 320 512c-17 0-33.3-6.7-45.3-18.7S256 464.1 256 448c0-4.4 3.6-8 8-8s8 3.6 8 8c0 12.7 5.1 24.9 14.1 33.9zM0 184c0-4.4 3.582-8 8-8h96c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.418 0-8-3.6-8-8zm632-8c4.4 0 8 3.6 8 8s-3.6 8-8 8h-96c-4.4 0-8-3.6-8-8s3.6-8 8-8h96zM607.2 36.42c1.9 3.95.3 8.76-3.6 10.74l-80 40c-4 1.97-8.8.37-10.8-3.58-1.9-3.95-.3-8.76 3.6-10.74l80-40c4-1.97 8.8-.37 10.8 3.58zM36.42 47.16a8.017 8.017 0 0 1-3.58-10.74 8.017 8.017 0 0 1 10.74-3.58l80.02 40c3.9 1.98 5.5 6.79 3.6 10.74-2 3.95-6.8 5.55-10.8 3.58l-79.98-40z" />
  </svg>
);

export default SvgBellOn;

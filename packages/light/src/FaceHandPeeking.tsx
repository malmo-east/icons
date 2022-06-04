import * as React from "react";
import { SVGProps } from "react";

const SvgFaceHandPeeking = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M163.2 73.59c-5.3-7.06-3.9-17.09 3.2-22.4C209.2 19.05 262.4 0 320 0c75.8 0 143.1 32.98 190.8 85.33 5.9 6.58 5.3 16.67-1.2 22.57-7.5 5.9-16.7 5.4-23.5-1.2-40.2-45.88-99.8-75.6-166.1-75.6-50.4 0-97 17.56-134.4 45.68-7.1 5.3-17.1 3.88-22.4-3.19zM320 480c57.4 0 109.7-21.6 149.3-57.9 6.6-5 16.7-4.5 22.6 2.1 5.9 6.6 5.4 16.7-1.2 22.6C445.4 487.3 385.6 512 320 512c-91.2 0-171.3-47.7-216.6-119.5-4.7-7.4-2.5-17.3 5-22 7.5-4.7 17.4-3.4 22.1 5C170.2 438.3 240.2 480 320 480zm32-256c0-17.7 14.3-32 32-32 1.2 0 2.3.1 3.4.2-5.5-12.5-4.5-27.5 4-39.4 12.9-18 37.9-22.2 55.8-9.3l38 27c1-10.4 5.2-18.8 12.6-26.2 17.1-17.2 45-17.2 61.3 0l46 45.2.8.8.2.1c45.5 46.7 45.2 121.4-1 166.7-22.4 23.2-52.7 35.8-84.3 35.8H456c-22.1 0-40-18.8-40-40v-.9h-8c-22.1 0-40-17.9-40-40 0-2.6.2-5.1.7-7.5-10.1-7.2-16.7-19.1-16.7-32.5 0-9.7 3.5-18.6 9.2-25.5-5.7-5.8-9.2-13.7-9.2-22.5zm62.1 8h19.5l-18-12.8c.3 1.6.4 3.2.4 3.9 0 3.7-.3 6.3-1.9 8v.9zM376 272c0 4.3 1.7 8.2 4.4 11 2.9 3.1 7 5 11.6 5h84c2.2 0 4 1.8 4 4s-1.8 4-4 4h-68c-8.8 0-16 7.1-16 15.9v-.8c0 9.7 7.2 16.9 16 16.9h67.5c2.5 0 4.5 1.1 4.5 4.5 0 2.4-2 4.4-4.5 4.4H456c-8.5 0-15.5 6.7-16 15.1v.9c0 8.8 7.2 16 16 16h64.8c25.3 0 49.5-10 67.3-27.9 36.9-36.9 37.2-96.6.8-133.8l-.8-.8-45.1-45.1c-7.8-7.8-20.5-7.8-28.3 0-7.8 7.8-7.8 20.5 0 28.3l14.8 14.8c6.6 5.7 2.7 17.9-6.6 19-2.8.3-5.6-.4-7.8-2l-81.8-59.3c-7.2-4.3-17.2-2.6-23.2 4.6-4.3 7.2-2.6 17.2 4.6 22.3l59.7 42.6c3.5 2.6 5.6 6.6 5.6 11 0 6.5-6.9 13.4-13.4 13.4H392c-8.8 0-16 7.2-16 16zm-104.9 78.7c13.1-9.4 30.5-14.7 48.9-14.7s35.8 5.3 48.9 14.7C382 360.1 392 374.4 392 392c0 17.6-10 31.9-23.1 41.3-13.1 9.4-30.5 14.7-48.9 14.7s-35.8-5.3-48.9-14.7c-14-9.4-23.1-23.7-23.1-41.3 0-17.6 9.1-31.9 23.1-41.3zm18.6 26c-7.2 5.1-9.7 10.8-9.7 15.3s2.5 10.2 9.7 15.3c7.1 5.1 17.8 8.7 30.3 8.7s23.2-3.6 30.3-8.7c7.2-5.1 9.7-10.8 9.7-15.3s-2.5-10.2-9.7-15.3c-7.1-5.1-17.8-8.7-30.3-8.7s-23.2 3.6-30.3 8.7zm89.7-232.6c2 6.3-1.5 13-7.8 15-28.5 8.7-47.6 34.5-47.6 64 0 16.2 5.1 30.3 13.6 41.7 4 5.3 2.9 12.8-2.4 16.8s-12.8 2.9-16.8-2.4c-11.6-15.4-18.4-34.5-18.4-56.1 0-40.3 27.1-75.2 64.4-86.9 6.3-2 13.1 1.5 15 7.9zM158.2 88.32c17.2 17.18 17.2 45.08 0 62.28l-1.4 1.4H232c22.1 0 40 17.9 40 40 0 2.6-.2 5.1-.7 7.5 10.1 7.2 16.7 19.1 16.7 32.5 0 13.4-6.6 25.3-16.7 32.5.5 2.4.7 4.9.7 7.5 0 22.1-17.9 40-40 40h-8.9v.9c0 21.2-17 40-40 40h-63.9c-31.62 0-61.93-12.6-84.29-35.8-46.21-45.3-46.54-120-1-166.7l.15-.1.85-.9 61.1-61.08c17.19-17.18 45.09-17.18 62.19 0zm24.9 208.58H170c-2.4 0-4.4-2-4.4-4.4 0-3.4 2-4.5 4.4-4.5h62c8.8 0 16-7.2 16-16l-.9-.1c0-8.8-6.3-15.9-15.1-15.9h-62.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H248c4.6 0 8.7-1.9 11.6-5 2.7-2.8 4.4-6.7 4.4-11s-1.7-8.2-4.4-11.9c-2.9-2.2-7-4.1-11.6-4.1h-78.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H232c8.8 0 15.9-7.1 16-15.8v-1.1c0-7.9-7.2-15.1-16-15.1H118.2c-7.2 0-10.7-8.6-5.7-13.7l28.8-28.7c7.8-7.8 7.8-20.5 0-28.3-7.8-7.82-20.5-7.82-29.2 0l-60.22 61.1-.8.8c-36.37 37.2-36.1 96.9.8 133.8 17.86 17.9 42.07 27.9 67.32 27.9h63.9c9.7 0 16-7.2 16-16v-.9c.5-6.7-4-12.4-10.2-14.3-1.6-.5-3.2-.8-5.8-.8z" />
  </svg>
);

export default SvgFaceHandPeeking;

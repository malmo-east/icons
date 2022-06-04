import * as React from "react";
import { SVGProps } from "react";

const SvgCupcake = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M445.9 224.4c-2.8 12-8.2 23.2-15.9 32.8-7.7 9.6-17.4 17.4-28.5 22.7-11.1 5.3-23.3 7.2-35.6 8.1H82.11c-12.32-.9-24.47-2.8-35.57-8.2-11.09-5.3-20.84-13.1-28.53-22.7-7.69-9.6-13.112-20.9-15.876-32.9-2.763-12-2.793-24.4-.089-36.5 3.458-14.3 10.595-27.4 20.695-38.1 10.1-10.7 22.82-19.5 36.9-22.9l35.56-9c2.78-17 11.6-32.52 24.7-43.66a72.55 72.55 0 0 1 47.2-17.14h33.3c3.5 0 6.8-1.02 9.7-2.92 2.8-1.91 5-4.62 6.3-7.78 1.3-3.17 1.7-6.65 1-10.01-.7-3.36-2.3-6.44-4.7-8.86-2.3-2.24-3.8-5.09-4.4-8.2-.6-3.11-1.2-6.33.9-9.256 1.2-2.927 3.3-5.428 5.9-7.186 2.6-1.758 5.7-2.693 8-2.687 33.3-.12 64.6 11.929 88.5 33.769 24 21.84 38.9 51.87 41.7 84.13l36.2 9.2c13.9 4.3 26.4 12.2 36.3 22 9.9 11.6 16.9 24.6 20.3 38.8 2.7 12 2.6 24.5-.2 36.5zm-51.3 41.1c8.9-4.3 16.8-10.6 23-18.4 6.2-7.7 10.6-16.8 12.8-26.5 2.2-10.5 2.2-19.7 0-29.4-2.8-11.4-8.5-21.9-16.5-30.5-8.1-8.5-18.2-14.9-29.5-18.4l-36.7-9.2c-2.9-1-5.4-2.9-7.3-5.4-1.8-2.4-2.9-5.4-3.1-8.5-2.6-29.1-15.7-54.44-36.6-73.54-21-19.1-48.3-29.68-77.6-29.66 5.5 4.66 8.7 10.6 10 17.06 1.3 6.46.6 13.16-1.9 19.25-2.5 6.08-6.8 11.29-12.3 14.95-5.4 3.67-11.9 5.63-18.5 5.64h-33.3c-13.5 0-26.5 4.8-36.8 13.53-10.3 8.74-17.1 20.87-19.3 34.17-.3 2.7-1.4 5.3-3.1 7.4-1.7 2.2-4.8 3.8-6.5 4.7l-37.82 9.6c-11.24 3.5-21.38 9.9-29.45 18.4-8.06 8.6-13.77 19.1-16.56 30.5-2.19 9.7-2.18 18.9.05 29.4 2.22 9.7 6.6 18.8 12.8 26.5a65.75 65.75 0 0 0 23.01 18.4c8.95 4.3 18.75 6.5 28.68 6.5H365.9c9.9 0 19.7-2.2 28.7-6.5zm-14.3 49.2c.9.5 1.7.4 2.3 2.1.7.9 1.1 1.9 1.3 2.9.3 1.1.3 2.2-.8 3.2L357.9 480c-1.5 8.1-6.1 17.1-13.1 22.9-6.9 5.9-15.7 9.1-25.7 9.1H128.2c-9.1 0-17.9-3.2-24.9-9.1-6.91-5.8-11.55-14.8-13.06-22.9L63.1 322.9c.72-1 .75-2.1.99-3.2.24-1 .69-2 1.31-2.8.62-1.8 1.41-1.6 2.31-2.2.91-.6 1.92-.9 2.98-1.1 2.11-.3 4.28.2 6.02 1.4 1.75 1.3 2.93 3.2 2.39 5.3l26.9 157c.9 5.2 3.6 10 7.7 13.4 4 3.4 9.2 5.3 14.5 5.3h23.2l-24.3-174.9c.6-2.2 1.2-4.3 2.5-6 1.3-1.7 3.2-2.8 5.3-3.1 2.2-.3 4.3.3 6 1.6 1.7 1.3 2.8 3.2 2.2 5.3L167.5 496h47.6V320c0-2.1 1.7-4.2 3.2-5.7 1.5-1.5 3.6-2.3 4.8-2.3 3 0 5.1.8 6.6 2.3 1.5 1.5 1.4 3.6 1.4 5.7v176h49.3l22.7-177.1c1-1 1.4-2 1.9-3.8.5-.1 1.2-.9 2.1-1.5.8-1.5 1.8-1.1 2.8-1.4 1-.3 2.1-.3 3.2-.2 1 .1 2 .5 2.9 1 .1.5 1.8 1.2 2.4 2.1.6.8 1.1 1.8 1.4 2.8.3 1 .3 2.1-.7 3.2L296.8 496h22.3c6.2-.9 11.3-1.9 15.3-5.4 4-3.4 6.7-8.2 7.5-13.4l26.2-157c.4-2.1 1.5-4 3.3-5.2 1.7-1.2 3.8-1.7 5.9-1.4 1.1.2 2.1.5 3 1.1z" />
  </svg>
);

export default SvgCupcake;

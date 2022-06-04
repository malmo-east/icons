import * as React from "react";
import { SVGProps } from "react";

const SvgCupcake = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M376.5 322.4c1.8 1.2 3.4 2.6 4.6 4.3 1.2 1.8 2.1 3.7 2.6 5.8.4 2 .5 4.2.1 6.3l-22.9 137.6c-1.7 9.9-6.8 19-14.5 25.5S328.9 512 318.8 512H129.2c-10.1 0-19.8-3.5-27.5-10.9-7.75-5.6-12.91-14.6-14.6-24.6L64.16 338.8c-.34-2.1-.28-4.2.2-6.3.47-2 1.35-4 2.57-5.7 1.22-1.7 2.77-3.1 4.55-4.3 1.79-1.1 3.77-1.8 5.85-2.2 2.07-1.2 4.19-.2 6.24.2 2.05.5 3.98 1.4 5.69 2.6 1.71 1.2 3.17 2.8 4.28 4.6 1.11 1.7 1.86 3.7 2.2 5.8l22.96 137.6c.4 2.5 1.7 4.8 3.6 6.4 1.9 1.6 4.4 2.5 6.9 2.5h32.7l-17.7-142.9c-.5-3.3.7-7.6 3.3-10.9 2.6-3.4 6.4-5.6 10.6-6.1 4.2-.5 8.5.7 11.8 3.3 3.4 1.7 5.6 6.4 6.1 10.6l18.1 146h59.8l18.2-146.1c.3-2.1 1-4.1 2-6.8 1-.9 2.4-2.5 4.1-3.8 1.6-2.2 3.5-2.3 5.6-2.8 2-.6 4.1-.7 6.2-.5 2.1.3 4.1.9 5.9 1.1 1.9 1.9 3.5 3.3 4.8 5 1.2 1.6 2.2 3.5 2.8 5.6.5 2 .7 4.1.4 6.2l-17.8 142h32.7c2.5 0 5-.9 6.9-2.5 1.9-1.7 3.2-3.9 3.6-7.3l23-136.7c-.2-4.2 3-7.9 6.4-11.3 3.5-1.6 7.8-2.6 12-1.9 2 .4 4 1.1 5.8 2.2zm70.9-126.3c1.8 15.7-.8 31.5-7.7 45.7-6.9 14.1-17.7 26-31.1 34.2-13.5 8.2-29 12.4-44.7 12H84.13c-18.24.3-36.06-5.4-50.73-16.3C18.74 260.9 8.033 245.5 2.944 228a82.505 82.505 0 0 1 6.682-60.6A82.28 82.28 0 0 1 56.1 128l39.36-10.8c2.94-16.9 11.74-32.15 24.84-43.18 13.1-11.03 28.8-17.09 46.8-17.12h33.3c3.5.04 6.9-.96 9.7-2.88 2-1.91 5.1-4.65 6.3-7.84 1.4-3.16 1.8-6.65 1.1-10.02-.7-3.36-2.4-6.45-4.8-8.83-2.3-2.24-3.8-5.09-4.4-8.2-.6-3.11-1.2-6.33.9-9.257 1.2-2.927 3.3-5.428 5.9-7.186 2.6-1.757 5.7-2.693 8-2.687 33 .089 65.6 12.75 89.5 35.4 24 22.66 38.4 52.7 39.5 86.5l26 3.9c19 2.7 38 12.6 51 27.8 10 12.1 16.4 26.9 18.3 42.5zm-33.2 23.5c2-6.8 2.5-13.9 1.5-21-1-7-3.5-13.7-7.4-19.7-3.9-6.8-9.1-11.8-15.1-14.7-6.1-3.7-12.9-6.1-19.9-7l-87.7-13.4c-2.1-.3-4.2-1-6-2.1-1.9-1-3.5-2.5-4.7-4.2-1.3-1.7-2.2-3.6-2.7-5.7-.6-2-.7-4.2-.3-6.3.3-2.1 1-4.1 2.2-5.9 1.1-1.9 2.5-3.4 4.3-4.7 1.7-1.2 3.7-2.1 5.7-2.6 2.1-.4 4.3-.5 6.4-.1l30.2 4.6c-2.5-19-10.6-36.86-23.2-51.34a97.88 97.88 0 0 0-47.7-30.04c.5 7.86-.8 15.75-4.7 23.01-2.8 9.08-9.1 16.84-17.2 22.27s-17.7 8.27-27.5 8.16h-33.3c-10.8.05-21.2 4.37-28.8 12.04-7.7 7.7-12 18-12 28.9 0 .3-.2.6-.2 1-1 1.1-.3 1.3-.7 3.2-.2.1-.5 1.9-.9 2.8-.5.9-1.1 1.7-1.7 2.5-.6.8-1.3 1.6-2 2.3-.8.6-1.6 1.2-2.4 1.7-1 .6-2 1.1-3 1.4-.4.2-.6.5-1 .5l-48.99 13.4c-12.03 4.3-21.98 13-27.84 24.3-5.86 11.3-7.2 24.5-3.75 36.7 3.25 10.8 9.93 20.1 19.02 26.7 9.09 6.6 20.08 10 31.29 8.8H363.9c11.2 1.2 22.1-2.2 31.2-8.7 9.1-6.6 15.8-15.9 19.1-26.6v-.2z" />
  </svg>
);

export default SvgCupcake;

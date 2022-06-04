import * as React from "react";
import { SVGProps } from "react";

const SvgHeartPulse = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M500.9 76.49C455.7 32.25 407.1 32 394.3 32c-12.63 0-61.52.25-106.3 44.37C243.3 32.25 194.5 32 181.8 32c-12.8 0-61.5.25-106.54 44.49C47.38 103.1 32 140.7 32 179.8c0 31.55 10.4 61.08 28.85 85.86 2.99 4.04 7.84 5.44 12.84 5.44h112.1l30.71-70.9 56.89 126.4c5.535 12.29 22.87 12.65 28.9.59l49.74-99.45 22.13 44.24h128.1c4.998 0 9.855-2.24 12.84-6.248C533.6 240.9 544 211.4 544 179.8c.1-39.1-15.3-76.7-43.1-103.31zm-6.3 162.61H394l-27.7-54.4c-5.877-11.75-22.63-11.75-28.51 0l-49.01 97.98L230.7 153.4c-5.9-12.8-24-12.5-29.4.3l-36 85.4H81.51c-9.252-14.62-42.63-82.73 18.25-142.7 22.63-22.12 52.26-33.24 82.02-33.24 33.88 0 54.51 6.248 106.3 57.24 55.01-54.12 74.52-57.24 106.3-57.24 29.76 0 59.39 11.12 81.89 33.24 60.93 61 27.43 129.1 18.33 142.7zm-52.2 64c-4.332 0-8.539 1.76-11.55 4.873l-130.1 134.5c-6.25 6.123-16.25 6.123-22.5 0L145.6 308.7c-3-3-7.1-5.6-11.4-5.6-14.19 0-21.34 17.1-11.39 27.2l133.1 135c18.75 18.5 48.64 18.37 67.39 0l130.6-135.1c9.8-9.3 2.6-27.1-11.5-27.1z" />
  </svg>
);

export default SvgHeartPulse;

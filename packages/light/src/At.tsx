import * as React from "react";
import { SVGProps } from "react";

const SvgAt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M259.7 16.03C116.5 13.94 2.766 140.5 17.25 283.1c11.96 117.8 102.2 205.2 221.5 212.8 9.275.596 17.18-6.739 17.18-16.04 0-8.395-6.552-15.39-14.92-15.92-106.1-6.828-185.7-86.38-192.7-192.5-7.852-119.6 82.95-220.8 202.6-223.4 118.1-2.607 212.1 89.77 212.1 208.2v22.46c0 26.43-17.55 50.57-43.34 56.27-36.37 8.039-68.67-19.59-68.67-54.64v-120.1c0-8.846-7.168-16.02-16.01-16.02-8.838 0-16.02 7.165-16.02 16.01v17.88c-24.95-25.56-61.83-39.39-101.6-31.85-43.87 8.45-79.57 44.45-87.57 89.35-12.72 70.86 41.68 132.8 110.2 132.8 37.39 0 70.32-18.63 90.68-46.9 16.48 30.84 50.34 51.03 88.7 46.15 44.44-5.656 76.63-45.58 76.63-90.42V256.3C495.1 122.8 392.5 17.96 259.7 16.03zM239.9 336.3c-44.13 0-80.02-35.93-80.02-80.09s35.92-80.01 80.02-80.01 80.02 35.93 80.02 80.09-35.82 80.01-80.02 80.01z" />
  </svg>
);

export default SvgAt;

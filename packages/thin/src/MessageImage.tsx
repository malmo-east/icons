import * as React from "react";
import { SVGProps } from "react";

const SvgMessageImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1.004h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.98c0 7.072 5.919 12.01 12.18 12.01 2.369 0 4.786-.73 6.948-2.307l124.9-93.68h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.76 483.2.004 447.1.004zm48 351.096c0 26.46-21.53 47.99-48 47.99H297.8l-122.7 92.08v-92.08h-112c-26.47 0-48-21.53-48-47.99V64.01c0-26.46 21.53-47.99 48-47.99h384c26.47 0 48 21.53 48 47.99V351.1zM312.6 137.7c-9.094-12.15-29.47-12.15-38.56.031l-71.81 96.92L186.1 216.2c-9.125-10.44-27-10.41-36.13-.031l-56 64.031c-6.22 7-7.72 17.1-3.81 25.7 3.906 8.531 12.48 14.08 21.85 14.08h288c9.125 0 17.3-5.085 21.4-13.21 4.125-8.154 3.312-17.78-2.125-25.09L312.6 137.7zm94.6 161.8a7.985 7.985 0 0 1-7.156 4.437h-288c-3.125 0-5.969-1.844-7.281-4.687-1.363-2.85-.863-6.15.337-8.55l56-64.02c1.5-1.717 3.688-2.717 6-2.717s4.5 1 5.1 2.748l29.28 33.4 83.59-112.9c3.094-4.062 9.844-4.093 12.88-.031l106.7 144c3.55 2.52 3.85 5.62 2.55 8.32zM127.1 167.1c22.06 0 40-17.93 40-39.99 0-22.06-17.94-39.99-40-39.99s-40 17.93-40 39.99c0 22.99 18.8 39.99 40 39.99zm0-63.1c13.22 0 24 10.77 24 23.1 0 13.23-10.78 23.1-24 23.1s-24-10.77-24-23.1c0-12.3 11.7-23.1 24-23.1z" />
  </svg>
);

export default SvgMessageImage;

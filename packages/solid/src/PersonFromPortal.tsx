import * as React from "react";
import { SVGProps } from "react";

const SvgPersonFromPortal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 223.1h-44.01l-26.1-53.25c-12.5-25.5-35.39-44.23-61.76-50.98l-71.1-21.13c-28.12-6.75-57.92-.494-80.79 17.13l-39.71 30.47c-1.5 1.125-2.419 2.75-3.669 4.25C140.2 61.74 112.4 0 80 0 35.88 0 0 114.6 0 255.1s35.88 255.1 80 255.1c25.25 0 47.76-37.5 62.39-96h63.08c19.12 0 36.56-11.35 44.06-29.1l8.828-20.52-10.64-6.273c-16.75-10-30-24.87-38-42.62l-14.84 34.51H154.1c4-30.097 5.9-62.097 5.9-95.097 0-20.25-.723-39.77-2.223-58.64 11.25 7.875 26.35 8.39 37.72-.36l39.603-29.5c7.75-6 17.46-7.922 25.33-6.172l14.65 4.333L237.7 252.2c-12.6 29.5-1.3 63.9 26.3 80.3l84.98 50.18-27.48 87.72c-5.25 16.87 4.086 34.86 20.96 40.11 16.88 5.25 34.71-4.069 40.09-20.94l31.68-101.1c5.875-21-3.042-43.26-21.67-54.38l-61.21-36.13 31.27-78.34 20.26 41.48c8.125 16.38 24.86 26.76 43.11 26.88H480c17.62 0 32-14.37 32-31.1 0-18.68-14.4-33.78-32-33.78zM368 96c26.5 0 48-21.5 48-47.1S394.5 0 368 0s-48.01 21.5-48.01 48S341.5 96 368 96z" />
  </svg>
);

export default SvgPersonFromPortal;
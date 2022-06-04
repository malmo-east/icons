import * as React from "react";
import { SVGProps } from "react";

const SvgCoffeePot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M431.5 177.6 480 32H72C32.31 32 0 64.3 0 104v112c0 4.4 3.594 8 8 8s8-3.6 8-8V104c0-30.88 25.12-56 56-56h29.34l43.41 130.1C95.38 217.9 64 277.8 64 344.6c0 51.5 18.62 84.74 49.62 117.7C124.5 473.6 139.5 480 155.1 480h265.8c15.62 0 30.57-6.192 41.32-17.57C493.2 429.6 512 396.1 512 344.6c0-66.2-30.6-126.7-80.5-167zM118.2 48h339.6l-42.63 128H160.9L118.2 48zm35 144h270.4c35.23 29.26 58.87 68.62 68.02 112H84.45c9.26-43.3 33.15-82.7 68.75-112zm297.4 259.4c-7.6 8-18.4 12.6-29.7 12.6H155.1c-11.23 0-22.17-4.645-29.84-12.58C98.1 422.5 80 393.2 80 344.6c0-8.3.65-16.5 1.69-24.6h412.7c1.01 8.1 1.61 16.3 1.61 24.6 0 48.7-18.1 77.9-45.4 106.8z" />
  </svg>
);

export default SvgCoffeePot;
import * as React from "react";
import { SVGProps } from "react";

const SvgShuttlecock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M479.1 192h-61.64l10.38-72.62c3.001-20.75-14.5-39.13-36.13-36.13l-72.64 10.38V32c0-17.75-14.25-32-32.01-32H244.9c-12.13 0-23.6 7.125-28.85 18.12l-118 245.78-67.02 67.08c-41.38 41.37-41.38 108.6.002 149.1 20.63 20.75 47.75 31.04 75 31.04 27.13 0 54.26-10.29 75.01-31.04l67.02-67.08 245.8-118c11-5.25 18.13-16.75 18.13-28.88L511.1 224c0-17.8-13.4-32-32-32zm-82-77.1-11.38 80.25-91.77 22.88 22.88-91.75 80.27-11.38zM244.8 32h43.13v70.25L185.6 155.6 244.8 32zm35 110.6-22.2 89.2-87.9 87.8-42.4-42.4 35.3-73.4 117.2-61.2zM31.91 406c0-18.63 7.001-36 19.5-49.63l104.3 104.3C141.9 473 124.6 480 105.9 480c-40.86 0-73.99-33.1-73.99-74zm146.49 32.2L73.67 333.5l32.26-32.25 104.8 104.8-32.33 32.15zm56.3-53.4-42.38-42.5 87.89-87.75 89.14-22.25-61.14 117.3-73.51 35.2zM479.1 267l-123.6 59.38L409.7 224h70.26v43z" />
  </svg>
);

export default SvgShuttlecock;
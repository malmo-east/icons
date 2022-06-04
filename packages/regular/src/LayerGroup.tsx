import * as React from "react";
import { SVGProps } from "react";

const SvgLayerGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M231.2 5.092C239 1.732 247.5 0 256 0s16.1 1.732 24.8 5.092L490.1 94.79C503.4 100.5 512 113.5 512 128s-8.6 27.5-21.9 33.2l-209.3 89.7c-8.7 3.4-16.3 5.1-24.8 5.1s-17-1.7-24.8-5.1L21.9 161.2C8.614 155.5 0 142.5 0 128c0-14.5 8.614-27.5 21.9-33.21L231.2 5.092zM256 48c-2.9 0-4.9.41-5.9 1.21L66.26 128l183.84 78.8c1 .8 3 1.2 5.9 1.2 2 0 4-.4 5.9-1.2L445.7 128 261.9 49.21C260 48.41 258 48 256 48zm-5.9 286.8c1 .8 3 1.2 5.9 1.2 2 0 4-.4 5.9-1.2L452 253.3c-4.6-6.9-5.5-16.1-1.5-24 6-11.9 20.4-16.7 32.2-10.8l9.1 4.6c12.4 6.2 20.2 18.8 20.2 32.6 0 14.7-8.7 27.9-22.1 33.6l-209.1 89.6c-8.7 3.4-16.3 5.1-24.8 5.1s-17-1.7-24.8-5.1L22.81 289.6C8.971 283.7 0 270.1 0 255c0-12.1 5.869-23.5 15.76-30.6l10.29-7.4c10.79-7.7 25.78-5.2 33.48 5.6 6.62 9.3 5.71 21.7-2.43 29.9l193 82.3zM59.53 350.6c6.62 9.3 5.71 21.7-2.43 29.9l193 82.3c1 .8 3 1.2 5.9 1.2 2 0 4-.4 5.9-1.2L452 381.3c-4.6-6.9-5.5-16.1-1.5-24 6-11.9 20.4-16.7 32.2-10.8l9.1 4.6c12.4 6.2 20.2 18.8 20.2 32.6 0 14.7-8.7 27.9-22.1 33.6l-209.1 89.6c-8.7 3.4-16.3 5.1-24.8 5.1s-17-1.7-24.8-5.1L22.81 417.6C8.971 411.7.001 398.1.001 383c0-12.1 5.869-23.5 15.759-30.6l10.29-7.4c10.79-7.7 25.78-5.2 33.48 5.6z" />
  </svg>
);

export default SvgLayerGroup;
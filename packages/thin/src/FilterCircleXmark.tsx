import * as React from "react";
import { SVGProps } from "react";

const SvgFilterCircleXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M474.4 32c20.8 0 37.6 16.84 37.6 37.61 0 8.54-2.9 16.83-8.2 23.5L422.2 194.1c-2.7 4.3-7.7 4.9-11.2 2.1-3.4-2.7-4.9-7.7-1.2-11.2l81.5-101.89c3-3.83 4.7-8.59 4.7-13.5C496 57.68 486.3 48 474.4 48H37.61C25.68 48 16 57.68 16 69.61c0 4.91 1.67 9.67 4.74 13.5L206.2 315c1.2 1.4 1.8 3.2 1.8 4.1v72.6c0 7.7 3.7 14.9 9.9 19.4l42.8 31.2c3.6 2.6 4.4 7.6 1.8 11.1-2.6 3.6-7.6 4.4-11.2 1.8l-42.8-31.1c-10.4-7.6-16.5-19.6-16.5-32.4v-68.9L8.242 93.11A37.628 37.628 0 0 1 0 69.61C0 48.84 16.84 32 37.61 32H474.4zm-31.1 336 50.4 50.3c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0L432 379.3l-50.3 50.4a8.15 8.15 0 0 1-11.4 0 8.15 8.15 0 0 1 0-11.4l50.4-50.3-50.4-50.3a8.15 8.15 0 0 1 0-11.4c3.2-3.1 8.2-3.1 11.4 0l50.3 50.4 50.3-50.4c3.2-3.1 8.2-3.1 11.4 0 3.1 3.2 3.1 8.2 0 11.4L443.3 368zm132.7 0c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zM432 240c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128z" />
  </svg>
);

export default SvgFilterCircleXmark;
import * as React from "react";
import { SVGProps } from "react";

const SvgFence = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M72 32c2.52 0 4.89 1.19 6.4 3.2l44.8 59.73c3.1 4.16 4.8 9.17 4.8 14.37V160h72v-50.7c0-5.2 1.7-10.21 4.8-14.37l44.8-59.73c1.5-2.01 3.9-3.2 6.4-3.2 2.5 0 4.9 1.19 6.4 3.2l44.8 59.73c3.1 4.16 4.8 9.17 4.8 14.37V160h72v-50.7c0-5.2 1.7-10.21 4.8-14.37l44.8-59.73c1.5-2.01 3.9-3.2 6.4-3.2 2.5 0 4.9 1.19 6.4 3.2l44.8 59.73c3.1 4.16 4.8 9.17 4.8 14.37V456c0 13.3-10.7 24-24 24h-64c-13.3 0-24-10.7-24-24v-88h-72v88c0 13.3-10.7 24-24 24h-64c-13.3 0-24-10.7-24-24v-88h-72v88c0 13.3-10.7 24-24 24H40c-13.25 0-24-10.7-24-24V109.3c0-5.2 1.68-10.21 4.8-14.37L65.6 35.2A8.009 8.009 0 0 1 72 32zm240 320h72V176h-72v176zM128 176v176h72V176h-72zM72 53.33 33.6 104.5c-1.04 1.4-1.6 3.1-1.6 4.8V456c0 4.4 3.58 8 8 8h64c4.4 0 8-3.6 8-8V109.3c0-1.7-.6-3.4-1.6-4.8L72 53.33zm368 0-38.4 51.17c-1 1.4-1.6 3.1-1.6 4.8V456c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V109.3c0-1.7-.6-3.4-1.6-4.8L440 53.33zM216 109.3V456c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V109.3c0-1.7-.6-3.4-1.6-4.8L256 53.33l-38.4 51.17c-1 1.4-1.6 3.1-1.6 4.8z" />
  </svg>
);

export default SvgFence;
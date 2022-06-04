import * as React from "react";
import { SVGProps } from "react";

const SvgPersonCane = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M247.1 56c0 30.93-24.2 56-56 56-30 0-56-25.07-56-56s26-56 56-56c31.8 0 56 25.07 56 56zm-56-40c-21.2 0-40 17.91-40 40s18.8 40 40 40c23 0 40-17.91 40-40s-17-40-40-40zM104 480c0 8.8 7.2 16 16 16s16-7.2 16-16V360c0-13.3 10.7-24 24-24s24 10.7 24 24v120c0 8.8 7.2 16 16 16s16-7.2 16-16V248c0-4.4 3.6-8 8-8s8 3.6 8 8v232c0 17.7-14.3 32-32 32s-32-14.3-32-32V360c0-4.4-3.6-8-8-8s-8 3.6-8 8v120c0 17.7-14.3 32-32 32s-32-14.3-32-32V248c0-4.4 3.59-8 8-8 4.4 0 8 3.6 8 8v232zm224-144c-13.3 0-24 10.7-24 24v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-22.1 17.9-40 40-40s40 17.9 40 40v144c0 4.4-3.6 8-8 8s-8-3.6-8-8V360c0-13.3-10.7-24-24-24zM23.21 315.5c-1.92 4-6.71 5.6-10.68 3.7-3.984-1.9-5.653-6.7-3.733-10.7L76.26 168.7C88.27 143.8 113.5 128 141.1 128h43.7c24.1 0 46.6 12.1 59.9 32.2l82 123.4c2.4 3.7 1.4 8.6-2.3 11.1-3.7 2.4-8.6 1.4-11.1-2.3L231.4 169c-10.4-15.6-27.9-25-46.6-25h-43.7c-21.5 0-41.1 12.3-50.43 31.7L23.21 315.5z" />
  </svg>
);

export default SvgPersonCane;
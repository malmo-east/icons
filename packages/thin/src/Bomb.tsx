import * as React from "react";
import { SVGProps } from "react";

const SvgBomb = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 8c4.4 0 8 3.58 8 8v40h40c4.4 0 8 3.58 8 8s-3.6 8-8 8h-40v40c0 4.4-3.6 8-8 8s-8-3.6-8-8V72h-40c-4.4 0-8-3.58-8-8s3.6-8 8-8h40V16c0-4.42 3.6-8 8-8zM88 304c0 4.4-3.58 8-8 8s-8-3.6-8-8v-8c0-70.7 57.3-128 128-128h8c4.4 0 8 3.6 8 8s-3.6 8-8 8h-8c-61.9 0-112 50.1-112 112v8zm190.5-195.7 10.9-10.93c12.5-12.49 32.7-12.49 45.2 0l33.5 34.33 18.2-17.4c3.2-3.1 8.2-3.1 11.4 0 3.1 3.2 3.1 8.2 0 11.4L380.3 143l34.3 34.4c12.5 12.5 12.5 32.7 0 45.2l-10.8 10.9c7.9 22 12.2 45.8 12.2 69.6C416 418.9 322.9 512 208 512 93.12 512 0 418.9 0 303.1c0-114 93.12-208 208-208 24.7 0 48.5 5.2 70.5 13.1v.1zm11.3 11.3c-4.4 4.3-10.9 5.8-16.7 3.7-20.3-8.2-42.2-11.3-65.1-11.3-106.9 0-192 85.1-192 192 0 106 85.1 192 192 192 106 0 192-86 192-192 0-22.9-4-44.8-11.3-65.1-2.1-5.8-.6-12.3 3.7-16.7l10.9-10.9c6.3-6.2 6.3-16.4 0-22.6l-80-80c-6.2-6.3-16.4-6.3-22.6 0l-10.9 10.9z" />
  </svg>
);

export default SvgBomb;
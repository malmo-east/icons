import * as React from "react";
import { SVGProps } from "react";

const SvgPlug = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M96 0c4.4 0 8 3.582 8 8v96H88V8a8 8 0 0 1 8-8zm192 0c4.4 0 8 3.582 8 8v96h-16V8c0-4.418 3.6-8 8-8zm88 144c4.4 0 8 3.6 8 8s-3.6 8-8 8h-32v80c0 81.3-63.8 147.6-144 151.8V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V391.8C103.8 387.6 40 321.3 40 240v-80H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h368zM192 376c75.1 0 136-60.9 136-136v-80H56v80c0 75.1 60.9 136 136 136z" />
  </svg>
);

export default SvgPlug;

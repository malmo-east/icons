import * as React from "react";
import { SVGProps } from "react";

const SvgLocationPin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M168.3 499.2C116.1 435 0 279.4 0 192 0 85.96 85.96 0 192 0c106 0 192 85.96 192 192 0 87.4-117 243-168.3 307.2-12.3 15.3-35.1 15.3-47.4 0zm152.4-250c10.8-25.6 15.3-44.8 15.3-57.2 0-79.5-64.5-144-144-144S48 112.5 48 192c0 12.4 4.49 31.6 15.3 57.2 10.48 24.8 25.36 52.2 42.5 79.9 28.4 46.2 61.4 90 86.2 122.6 24.8-32.6 57.8-76.4 86.2-122.6 17.1-27.7 32-55.1 42.5-79.9z" />
  </svg>
);

export default SvgLocationPin;

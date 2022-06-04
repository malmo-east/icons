import * as React from "react";
import { SVGProps } from "react";

const SvgWalker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m92.65 208-76.9 298c-1.11 4.3-5.47 6.9-9.749 5.7A7.941 7.941 0 0 1 .254 502L115.9 54.01C124.1 22.22 152.7 0 185.6 0H328c39.8 0 72 32.24 72 72v344c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V208H92.65zM185.6 16c-25.6 0-47.9 17.28-54.2 42.01L96.78 192H384V72c0-30.93-25.1-56-56-56H185.6zM400 496c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
  </svg>
);

export default SvgWalker;

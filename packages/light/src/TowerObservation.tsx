import * as React from "react";
import { SVGProps } from "react";

const SvgTowerObservation = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M248.8 1.689c4.5-2.252 9.8-2.252 14.4 0l176 88.001c7.9 3.95 11.1 13.61 7.1 21.51-3.9 7.9-13.6 11.1-21.5 7.1l-8.8-4.4V192c0 26.5-21.5 48-48 48h-7.8l39.6 237.4c.1.9.2 1.7.2 2.6h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h95.1c0-.9 1-1.7 1.1-2.6L151.8 240H144c-26.5 0-48-21.5-48-48v-78.1l-8.84 4.4c-7.91 4-17.52.8-21.47-7.1-3.95-7.9-.75-17.56 7.15-21.51L248.8 1.689zM128 97.89v29.21h256V97.89l-128-64-128 64zm0 62.11v32c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-32H128zm231.4 320L256 391.4 152.6 480h206.8zM183.8 242.6l-6.5 39.1 78.7 67.5 78.7-67.5-6.5-39.1c-.1-.9-1.1-1.7-1.1-2.6H184c0 .9-.1 1.7-.2 2.6zm-12.7 76L151 439.2l80.4-68.9-60.3-51.7zm109.5 51.7 79.5 68.9-19.2-120.6-60.3 51.7z" />
  </svg>
);

export default SvgTowerObservation;

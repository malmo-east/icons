import * as React from "react";
import { SVGProps } from "react";

const SvgRing = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 64C109.1 64 0 125.9 0 208v98.13C0 384.5 114.6 448 256 448s256-63.5 256-141.9V208c0-82.1-110.9-144-256-144zm0 48c110.5 0 200 35.88 200 80 0 9.125-4 17.75-11 25.88C398.2 192.2 331 176 256 176s-142.2 16.2-189 41.9c-7-8.1-11-16.8-11-25.9 0-44.1 89.5-80 200-80zm141.8 136.5C361.5 263 311.4 272 256 272s-105.5-9-141.8-23.5C149.1 234.2 198.4 224 256 224s105.1 10.2 141.8 24.5zm66.2 57.6c0 38.3-81 93.9-208 93.9S48 344.37 48 306.12V266.4C94.38 298.8 170.1 320 256 320s161.6-21.25 208-53.63v39.73z" />
  </svg>
);

export default SvgRing;

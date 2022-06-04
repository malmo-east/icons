import * as React from "react";
import { SVGProps } from "react";

const SvgClockRotateLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512c-78.4 0-148.7-35.3-195.6-90.8-2.85-3.4-2.43-8.5.95-11.3 3.37-2.9 8.42-2.4 11.27.9C116.7 462.9 182.5 496 256 496c132.5 0 240-107.5 240-240S388.5 16 256 16C151.5 16 62.6 82.78 29.65 176H136c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.418 0-8-3.6-8-8V56a8 8 0 0 1 8-8c4.42 0 8 3.58 8 8v110.7C52.23 69.37 146 0 256 0zm0 128c4.4 0 8 3.6 8 8v116.7l85.7 85.6c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0l-88-88c-1.5-1.5-2.3-3.6-2.3-5.7V136c0-4.4 3.6-8 8-8z" />
  </svg>
);

export default SvgClockRotateLeft;

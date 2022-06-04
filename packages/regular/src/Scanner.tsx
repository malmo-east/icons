import * as React from "react";
import { SVGProps } from "react";

const SvgScanner = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M527.4 264.8 66.8 34.5c-11.83-5.906-26.25-1.109-32.2 10.73-5.99 11.89-1.19 26.3 10.67 32.24l421.1 210.5L64 287.1c-35.35 0-64 28.65-64 64v64C0 451.3 28.65 480 64 480h448c35.35 0 64-28.66 64-64v-72.45c0-33.55-18.6-63.65-48.6-78.75zm.6 150.3c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16v-64c0-8.822 7.178-16 16-16h448c8.822 0 16 7.178 16 16v64zm-432-56c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-12.4-10.7-24-24-24zm80 0c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-12.4-10.7-24-24-24z" />
  </svg>
);

export default SvgScanner;

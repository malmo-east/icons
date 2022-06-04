import * as React from "react";
import { SVGProps } from "react";

const SvgFunction = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M208 32h-48c-44.2 0-80 35.82-80 80v80H16c-8.801 0-16 7.2-16 16s7.199 16 16 16h64v144c0 26.51-21.49 48.01-48 48.01L16 416c-8.801 0-16 7.2-16 16s7.199 16 16 16h16c44.18 0 80-35.82 80-80V224h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64v-80c0-26.51 21.49-47.99 48-47.99l48-.01c8.8 0 16-7.2 16-16s-7.2-16-16-16zm299.3 212.7c-6.223-6.223-16.4-6.223-22.62 0l-53.18 52.7-52.2-52.7c-6.221-6.223-16.4-6.223-22.62 0-6.221 6.223-6.221 16.4 0 22.62L408.9 320l-52.21 52.71c-6.221 6.221-6.221 16.4 0 22.62 6.223 6.221 16.4 6.221 22.62 0l52.21-52.71 53.21 52.71c6.221 6.221 16.4 6.221 22.62 0 6.221-6.223 6.221-16.4 0-22.62L454.1 320l53.21-52.71c6.29-6.19 6.29-16.39-.01-22.59zm-210.2-81.2c-6-5.5-16.1-4.3-21.6 2.5-33.2 41.5-51.5 96.2-51.5 154s18.3 112.5 51.5 154c3.2 3.9 7.8 6 12.5 6 3.5 0 7.031-1.156 9.984-3.5 6.891-5.531 8.016-15.59 2.5-22.5C271.8 418.1 256 370.5 256 320s15.8-98.13 44.5-134c5.5-6.9 4.4-17-3.4-22.5zm291.4 2.5c-5.516-6.875-15.58-8-22.5-2.5-6.9 5.5-8.9 15.6-2.5 22.5 28.7 35.9 44.5 83.5 44.5 134s-15.8 98.13-44.5 134c-5.516 6.906-4.391 16.97 2.5 22.5 2.1 2.3 6.5 3.5 9.1 3.5a16.02 16.02 0 0 0 12.52-6c33.2-41.53 51.5-96.22 51.5-154S621.7 207.5 588.5 166z" />
  </svg>
);

export default SvgFunction;

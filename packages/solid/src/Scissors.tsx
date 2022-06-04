import * as React from "react";
import { SVGProps } from "react";

const SvgScissors = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M396.8 51.2c28.3-28.28 74.1-28.28 102.4 0 7.1 7.07 7.1 18.53 0 25.6L216.5 359.5c4.8 12.6 7.5 26.2 7.5 40.5 0 61.9-50.1 112-112 112C50.14 512 0 461.9 0 400s50.14-112.9 112-112.9c14.3 0 27.9 3.6 40.5 8.4l38.6-40.4-38.6-38.6c-12.6 4.8-26.2 7.5-40.5 7.5C50.14 224 0 173.9 0 112 0 50.14 50.14 0 112 0c61.9 0 112 50.14 112 112 0 14.3-2.7 27.9-7.5 40.5l38.6 38.6L396.8 51.2zM160 111.1c0-25.61-21.5-48-48-48-26.51 0-48 22.39-48 48 0 27.4 21.49 48 48 48 26.5 0 48-20.6 48-48zM112 448c26.5 0 48-21.5 48-48s-21.5-48-48-48c-26.51 0-48 21.5-48 48s21.49 48 48 48zm166.6-105.4 64-64 156.6 156.6c7.1 7.1 7.1 18.5 0 25.6-28.3 28.3-74.1 28.3-102.4 0L278.6 342.6z" />
  </svg>
);

export default SvgScissors;

import * as React from "react";
import { SVGProps } from "react";

const SvgScissors = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M472.6 442.4 312.4 308.2l37.4-31.3 153.6 128.7c10.2 8.5 11.5 23.7 3 33.8-8.5 10.2-23.7 11.5-33.8 3zM112 0c61.9 0 112 50.14 112 112 0 17.9-4.2 34.8-11.6 49.8l75.1 62.9L472.6 69.6c10.1-8.51 25.3-7.17 33.8 2.99 8.5 10.16 7.2 25.29-3 33.81l-291 243.8c7.4 15 11.6 31.9 11.6 49.8 0 61.9-50.1 112-112 112C50.14 512 0 461.9 0 400s50.14-112 112-112c26.6 0 51.1 9.3 70.3 24.8l67.8-56.8-67.8-56.8C163.1 214.7 138.6 224 112 224 50.14 224 0 173.9 0 112 0 50.14 50.14 0 112 0zM48 112c0 35.3 28.65 64 64 64 35.3 0 64-28.7 64-64 0-35.35-28.7-64-64-64-35.35 0-64 28.65-64 64zm64 224c-35.35 0-64 28.7-64 64s28.65 64 64 64c35.3 0 64-28.7 64-64s-28.7-64-64-64z" />
  </svg>
);

export default SvgScissors;
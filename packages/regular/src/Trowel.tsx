import * as React from "react";
import { SVGProps } from "react";

const SvgTrowel = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M491.8 20.18c26.9 26.92 26.9 70.55 0 97.42l-95.4 95.5c-14.6 14.5-38.2 14.5-52.8 0l-5.4-5.4L237.9 308l74.2 75c6.8 5.9 9.2 14.5 7.2 22.6-1.9 8.1-8 14.7-15.9 17.2l-272.01 88c-8.58 2.8-17.99.5-24.36-6.7-6.374-5.5-8.639-14.9-5.864-23.5l88.004-272c2.57-7.9 9.09-14 17.23-15.9 8.1-2 16.7.4 21.7 6.3l75.9 75.1 100.3-100.3-5.4-5.4c-14.5-14.6-14.5-38.2 0-52.8l95.5-95.42c26.9-26.908 70.5-26.908 97.4 0zM340.4 142l28.7 29.6 88.8-87.9c8.1-8.17 8.1-21.41 0-29.58-8.2-8.16-21.4-8.16-29.6 0L340.4 142zM122.8 260.7l-61.51 190 190.01-61.5-128.5-128.5z" />
  </svg>
);

export default SvgTrowel;
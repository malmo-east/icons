import * as React from "react";
import { SVGProps } from "react";

const SvgBurst = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m200.9 116.2 32.3-99.6A23.96 23.96 0 0 1 256 .001c10.4 0 19.6 6.705 22.8 16.599l34.5 106.5 70.5-25.65c8.8-3.19 18.6-1.02 24.3 5.55 7.5 6.6 9.6 16.4 6.5 25.2l-25.7 70.5 106.5 34.5c9.9 3.2 16.6 12.4 16.6 22.8s-6.7 19.6-16.6 22.8l-103.1 33.4 52.9 100.6c4.9 9.3 3.2 20.7-5.1 27.3-6.6 8.3-18 10-27.3 5.1l-100.6-52.9-33.4 103.1c-3.2 9.9-12.4 16.6-22.8 16.6s-19.6-6.7-22.8-16.6l-33.4-103.1-100.63 52.9c-9.3 4.9-20.71 3.2-28.14-5.1-7.43-6.6-9.16-18-4.27-27.3l52.94-100.6-103.1-33.4A23.96 23.96 0 0 1 0 256c0-10.4 6.705-19.6 16.6-22.8l99.6-32.3L4.208 37.57C-2.33 28.04-1.143 15.2 7.03 7.03c8.17-8.174 21.01-9.36 30.54-2.822L200.9 116.2zm-54.4 95c-3.2 9.6-10.8 17-20.4 20.1L49.96 256l79.54 25.8c9 2.9 16.3 9.6 19.8 18.4 3.6 8.7 3.1 18.6-2.2 26.9l-40 77.8 77.8-40.9c8.3-4.4 18.2-4.9 26.9-1.3 8.8 3.5 15.5 10.8 18.4 19.8L256 462l25.8-79.5c2.9-9 9.6-16.3 18.4-19.8 8.7-3.6 18.6-3.1 26.9 1.3l77.8 40.9-40.9-77.8c-4.4-8.3-4.9-18.2-1.3-26.9 3.5-8.8 10.8-15.5 19.8-18.4L462 256l-83-26.9c-8.2-2.7-15.1-8.6-18.9-16.4-3.8-7.8-4.3-16.8-1.3-25l19.8-54.3-54.3 19.8c-8.2 3-17.2 2.5-25-1.3-7.8-3.8-13.7-10.7-16.4-19.8L256 49.96l-24.7 76.14c-3.1 9.6-10.5 17.2-20.1 20.4-9.5 3.3-20.1 1.8-28.4-3.9L54.87 54.87 142.6 182.8c5.7 8.3 7.2 18.9 3.9 28.4z" />
  </svg>
);

export default SvgBurst;

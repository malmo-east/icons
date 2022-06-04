import * as React from "react";
import { SVGProps } from "react";

const SvgHexagonXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M178.3 178.3c3.2-3.1 8.2-3.1 11.4 0l66.3 66.4 66.3-66.4c3.2-3.1 8.2-3.1 11.4 0 3.1 3.2 3.1 8.2 0 11.4L267.3 256l66.4 66.3c3.1 3.2 3.1 8.2 0 11.4a8.15 8.15 0 0 1-11.4 0L256 267.3l-66.3 66.4a8.15 8.15 0 0 1-11.4 0 8.15 8.15 0 0 1 0-11.4l66.4-66.3-66.4-66.3a8.15 8.15 0 0 1 0-11.4zM342 32c25.1 0 48.5 13.1 61.5 34.56L496 218.6c14 23 14 51.8 0 74.8l-92.5 152c-13 21.5-36.4 34.6-61.5 34.6H169.1c-24.2 0-47.6-13.1-60.6-34.6l-92.54-152a71.866 71.866 0 0 1 0-74.8L108.5 66.56C121.5 45.1 144.9 32 169.1 32H342zM29.63 226.9a55.924 55.924 0 0 0 0 58.2l92.47 152c10.2 16.7 28.3 26.9 47 26.9H342c19.6 0 37.7-10.2 47.8-26.9l92.6-152a55.88 55.88 0 0 0 0-58.2L389.8 74.88C379.7 58.19 361.6 48 342 48H169.1c-18.7 0-36.8 10.19-47 26.88L29.63 226.9z" />
  </svg>
);

export default SvgHexagonXmark;

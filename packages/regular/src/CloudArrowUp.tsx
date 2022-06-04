import * as React from "react";
import { SVGProps } from "react";

const SvgCloudArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M303 175c9.4-9.3 24.6-9.3 33.1 0l80 80c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0l-39-38.2V384c0 13.3-10.7 24-24 24s-24-10.7-24-24V249.9l-39.9 38.2c-8.5 10.2-23.7 10.2-33.1 0-9.3-8.5-9.3-23.7 0-33.1l80-80zM144 480C64.47 480 0 415.5 0 336c0-62.7 40.07-116.9 96-135.8v-.2c0-92.8 75.2-168 168-168 50.9 0 96.4 22.6 127.3 58.31C406.2 83.68 422.6 80 440 80c66.3 0 120 53.7 120 120 0 6.6-.5 13-1.5 19.3 48 21 81.5 69 81.5 124.7 0 72.4-56.6 131.6-128 135.8v.2H144zM264 80c-66.3 0-120 53.7-120 120v34.1l-32.9 11.4C74.64 258.7 48 294.3 48 336c0 53 42.98 96 96 96h362.6l2.6-.2c46.2-2.6 82.8-41 82.8-87.8 0-36-21.6-67.1-52.8-80.7l-34.1-14.9 6-36.7c.6-3.8.9-7.7.9-11.7 0-39.8-32.2-72-72-72-10.5 0-20.4 2.2-29.2 6.2l-32.6 14.5-23.3-27C332.8 96.08 300.3 80 263.1 80h.9z" />
  </svg>
);

export default SvgCloudArrowUp;

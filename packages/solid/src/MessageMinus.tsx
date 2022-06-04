import * as React from "react";
import { SVGProps } from "react";

const SvgMessageMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.75 11.25 15.45 19.12 9.7l124.88-91h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zM336 231.1H176c-13.3 0-24-9.8-24-23.1 0-13.26 10.74-23.1 23.1-23.1h160c14.2-.9 24.9 9.8 24.9 23.1s-10.7 23.1-24 23.1z" />
  </svg>
);

export default SvgMessageMinus;

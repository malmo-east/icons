import * as React from "react";
import { SVGProps } from "react";

const SvgArrowPointer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M311.9 279.5 39.87 37.99C35.41 34.03 29.75 32 24.01 32c-3.34 0-6.7.69-9.89 2.11A24.01 24.01 0 0 0 0 56.02v370.3c0 10.12 6.281 19.18 15.72 22.67a23.906 23.906 0 0 0 26.561-7.026l83.48-98.81 58.25 123.1c5.697 12.04 20.01 17.15 31.98 11.42 11.97-5.731 17.06-20.14 11.36-32.18l-58.58-123.8h127.2c9.984 0 18.92-6.209 22.45-15.61 2.679-9.384.979-19.984-6.521-26.584zm-190.2-6.1-73.69 87.23V109.6l184.5 163.8H121.7z" />
  </svg>
);

export default SvgArrowPointer;
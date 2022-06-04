import * as React from "react";
import { SVGProps } from "react";

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m264.6 70.63 176 168c4.75 4.531 7.438 10.81 7.438 17.38s-2.688 12.84-7.438 17.38l-176 168c-9.594 9.125-24.78 8.781-33.94-.813-9.156-9.5-8.812-24.75.813-33.94l132.7-126.6H24.01c-13.25 0-24.01-10.76-24.01-24.01s10.76-23.99 24.01-23.99h340.1l-132.7-126.6c-9.61-9.207-9.91-24.457-.81-33.987 9.2-9.6 23.5-9.94 34-.82z" />
  </svg>
);

export default SvgArrowRight;

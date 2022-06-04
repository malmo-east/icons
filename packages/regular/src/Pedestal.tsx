import * as React from "react";
import { SVGProps } from "react";

const SvgPedestal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M144 88c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.7 24-24c0-13.26-10.7-24-24-24zm160 0c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.7-24-24-24zm120 376h-8V64c0-35.35-28.65-64-64-64H96C60.65 0 32 28.65 32 64v400h-8c-13.25 0-24 10.7-24 24s10.75 24 24 24h400c13.25 0 24-10.75 24-24 0-13.3-10.7-24-24-24zm-56 0H80V64c0-8.822 7.178-16 16-16h256c8.822 0 16 7.178 16 16v400z" />
  </svg>
);

export default SvgPedestal;
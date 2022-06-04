import * as React from "react";
import { SVGProps } from "react";

const SvgFaceFlushed = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M184 224c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm192 0c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24zm136 32c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zM192 400h128c8.8 0 16-7.2 16-16s-7.2-16-16-16H192c-8.8 0-16 7.2-16 16s7.2 16 16 16zm-32-104c39.8 0 72-32.2 72-72s-32.2-72-72-72-72 32.2-72 72 32.2 72 72 72zm192-144c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z" />
  </svg>
);

export default SvgFaceFlushed;

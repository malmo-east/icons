import * as React from "react";
import { SVGProps } from "react";

const SvgConveyorBelt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M544 320H96c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zm0 160H96c-35.25 0-64-28.75-64-64s28.75-64 64-64h448c35.25 0 64 28.75 64 64s-28.7 64-64 64zM192 288h256c35.35 0 64-28.65 64-64V64c0-35.35-28.65-64-64-64H192c-35.3 0-64 28.65-64 64v160c0 35.3 28.7 64 64 64zm80-256h96v70.13l-40.84-20.44a16.012 16.012 0 0 0-14.31 0L272 102.1V32zM160 64c0-17.64 14.36-32 32-32h48v96c0 5.531 2.875 10.69 7.594 13.62 4.656 2.812 10.59 3.156 15.56.688L320 113.9l56.84 28.44c2.26 1.06 4.76 1.66 7.16 1.66 2.938 0 5.844-.813 8.406-2.375C397.1 138.7 400 133.5 400 128V32h48c17.64 0 32 14.36 32 32v160c0 17.64-14.36 32-32 32H192c-17.6 0-32-14.4-32-32V64zm-32 328c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.7 24-24-10.7-24-24-24zm192 0c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.3-10.7-24-24-24zm192 0c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.3-10.7-24-24-24z" />
  </svg>
);

export default SvgConveyorBelt;
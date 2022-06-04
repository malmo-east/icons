import * as React from "react";
import { SVGProps } from "react";

const SvgBarsProgress = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 64c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-64c0-26.51 21.49-48 48-48h416zm-16 64H320v32h128v-32zm16 160c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-64c0-26.5 21.49-48 48-48h416zm-272 64v32h256v-32H192z" />
  </svg>
);

export default SvgBarsProgress;

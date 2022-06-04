import * as React from "react";
import { SVGProps } from "react";

const SvgObjectsAlignLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 24C0 10.75 10.75 0 24 0s24 10.75 24 24v464c0 13.3-10.75 24-24 24S0 501.3 0 488V24zm464 40c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48v-64c0-26.51 21.5-48 48-48h288zM336 288c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h160z" />
  </svg>
);

export default SvgObjectsAlignLeft;
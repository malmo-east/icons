import * as React from "react";
import { SVGProps } from "react";

const SvgObjectsAlignRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 488c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.25 10.7-24 24-24s24 10.75 24 24v464zM384 176c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-64c0-26.51 21.49-48 48-48h288c26.5 0 48 21.49 48 48v64zm-48 0v-64H48v64h288zm48 224c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v64zm-48 0v-64H176v64h160z" />
  </svg>
);

export default SvgObjectsAlignRight;

import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarCircleMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M151.1 64H296V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v64H47.1v256c0 8.8 8.06 16 16 16h221.4c12.2 18.8 28 35.1 46.3 48H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24s24 10.75 24 24l-.9 40zm136 304c0-79.5 65.4-144 144.9-144s144 64.5 144 144-64.5 144-144 144-144.9-64.5-144.9-144zM496 383.1c8.8 0 16-6.3 16-16 0-7.9-7.2-16-16-16H368c-8.8 0-16 8.1-16 16 0 9.7 7.2 16 16 16h128z" />
  </svg>
);

export default SvgCalendarCircleMinus;

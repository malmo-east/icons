import * as React from "react";
import { SVGProps } from "react";

const SvgCalendarCirclePlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M151.1 64H296V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v64H47.1v256c0 8.8 8.06 16 16 16h221.4c12.2 18.8 28 35.1 46.3 48H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24s24 10.75 24 24l-.9 40zM576 368c0 79.5-64.5 144-144 144s-144.9-64.5-144.9-144S352.5 224 432 224s144 64.5 144 144zm-160-64.9v48h-48c-8.8 0-16 8.1-16 16 0 9.7 7.2 16 16 16h48v48c0 9.7 7.2 16 16 16s16-6.3 16-16v-48h48c8.8 0 16-6.3 16-16 0-7.9-7.2-16-16-16h-48v-48c0-7.9-7.2-16-16-16s-16 8.1-16 16z" />
  </svg>
);

export default SvgCalendarCirclePlus;
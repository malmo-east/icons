import * as React from "react";
import { SVGProps } from "react";

const SvgBoxArchive = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 32H48C21.49 32 0 53.49 0 80v64c0 17.6 14.4 32 31.1 32l.9 240c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V176c17.6 0 32-14.4 32-31.1V80c0-26.51-21.5-48-48-48zm-48 400H96c-8.837 0-16-7.163-16-16V176h352v240c0 8.8-7.2 16-16 16zm48-304H48V80h416v48zM183.1 272h144c14.2 0 24.9-10.7 24.9-24s-10.7-24-24-24H183.1c-12.4 0-23.1 10.7-23.1 23.1 0 14.2 10.7 24.9 23.1 24.9z" />
  </svg>
);

export default SvgBoxArchive;

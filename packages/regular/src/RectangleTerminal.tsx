import * as React from "react";
import { SVGProps } from "react";

const SvgRectangleTerminal = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m136.2 150.3 96 88c5 4.6 7.8 11 7.8 17.7 0 6.7-2.8 13.1-7.8 17.7l-96 88c-9.8 8.9-24.9 7.4-33.9-1.5-8.95-9.8-8.29-24.9 1.5-33.9l76.7-70.3-76.7-70.3c-9.79-9-10.45-24.1-1.5-33.9 9-9.8 24.1-10.4 33.9-1.5zM392 336c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24s10.7-24 24-24h144zm56-304c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h384zm0 48H64c-8.84 0-16 7.16-16 16v320c0 8.8 7.16 16 16 16h384c8.8 0 16-7.2 16-16V96c0-8.84-7.2-16-16-16z" />
  </svg>
);

export default SvgRectangleTerminal;

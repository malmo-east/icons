import * as React from "react";
import { SVGProps } from "react";

const SvgSprayCan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M96 40c0-22.09 17.9-40 40-40h48c22.1 0 40 17.91 40 40v80c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-13.25-10.7-24-24-24h-48c-13.3 0-24 10.75-24 24v80c0 4.4-3.6 8-8 8-4.42 0-8-3.6-8-8V40zm152 296c0 48.6-39.4 88-88 88s-88-39.4-88-88 39.4-88 88-88 88 39.4 88 88zm-88 72c39.8 0 72-32.2 72-72s-32.2-72-72-72-72 32.2-72 72 32.2 72 72 72zm64-248c53 0 96 42.1 96 96v192c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V256c0-53.9 42.98-96 96-96h128zm0 16H96c-44.18 0-80 35.8-80 80v192c0 26.5 21.49 48 48 48h192c26.5 0 48-21.5 48-48V256c0-44.2-35.8-80-80-80zm96-128c0 8.84-7.2 16-16 16s-16-7.16-16-16 7.2-16 16-16 16 7.16 16 16zm64 0c0-8.84 7.2-16 16-16s16 7.16 16 16-7.2 16-16 16-16-7.16-16-16zm128 0c0 8.84-7.2 16-16 16s-16-7.16-16-16 7.2-16 16-16 16 7.16 16 16zm-32 96c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm32 96c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16zm-128-96c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16z" />
  </svg>
);

export default SvgSprayCan;
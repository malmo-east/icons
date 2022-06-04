import * as React from "react";
import { SVGProps } from "react";

const SvgMars = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M440 32H296c-4.4 0-8 3.58-8 8s3.578 8 8 8h124.7L294.5 174.2C263.2 145.6 221.7 128 176 128 78.8 128 0 206.8 0 304s78.8 176 176 176 176-78.8 176-176c0-45.72-17.58-87.23-46.16-118.5L432 59.31V184c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.42-3.6-8-8-8zM176 464c-88.22 0-160-71.78-160-160s71.78-160 160-160 160 71.78 160 160-71.8 160-160 160z" />
  </svg>
);

export default SvgMars;

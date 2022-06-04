import * as React from "react";
import { SVGProps } from "react";

const SvgSensor = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm48 384c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v320zM88 96c-4.41 0-8 3.59-8 8v176c0 4.4 3.59 8 8 8s8-3.6 8-8V104c0-4.41-3.59-8-8-8zm64 0c-4.4 0-8 3.59-8 8v176c0 4.4 3.6 8 8 8s8-3.6 8-8V104c0-4.41-3.6-8-8-8zm64 0c-4.4 0-8 3.59-8 8v176c0 4.4 3.6 8 8 8s8-3.6 8-8V104c0-4.41-3.6-8-8-8z" />
  </svg>
);

export default SvgSensor;

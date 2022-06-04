import * as React from "react";
import { SVGProps } from "react";

const SvgSdCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 0H128L0 128v320c0 35.25 28.75 64 64 64h256c35.25 0 64-28.75 64-64V64c0-35.25-28.7-64-64-64zm48 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V134.6L134.6 16H320c26.47 0 48 21.53 48 48v384zM168 64c-4.4 0-8 3.59-8 8v80c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.41-3.6-8-8-8zm64 0c-4.4 0-8 3.59-8 8v80c0 4.4 3.6 8 8 8s8-3.594 8-8V72c0-4.41-3.6-8-8-8zm64 0c-4.4 0-8 3.59-8 8v80c0 4.4 3.6 8 8 8s8-3.594 8-8V72c0-4.41-3.6-8-8-8z" />
  </svg>
);

export default SvgSdCard;

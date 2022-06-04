import * as React from "react";
import { SVGProps } from "react";

const SvgMobileNotch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M240 440h-96c-4.406 0-8 3.578-8 8s3.594 8 8 8h96c4.406 0 8-3.578 8-8s-3.6-8-8-8zM304 0H80C53.5 0 32 21.5 32 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM144 16h96v24c0 4.406-3.594 8-8 8h-80c-4.4 0-8-3.59-8-8V16zm192 448c0 17.64-14.36 32-32 32H80c-17.64 0-32-14.36-32-32V48c0-17.64 14.36-32 32-32h48v24c0 13.23 10.8 24 24 24h80c13.2 0 24-10.77 24-24V16h48c17.64 0 32 14.36 32 32v416z" />
  </svg>
);

export default SvgMobileNotch;

import * as React from "react";
import { SVGProps } from "react";

const SvgSquareZ = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm48 384c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v320zm-104-48H137.5L334 141.2a7.956 7.956 0 0 0 1.25-8.562C333.1 129.8 331.1 128 328 128H120c-4.4 0-8 3.6-8 8s3.6 8 8 8h190.5L114 370.8a7.956 7.956 0 0 0-1.25 8.562C114 382.2 116.9 384 120 384h208c4.406 0 8-3.578 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgSquareZ;

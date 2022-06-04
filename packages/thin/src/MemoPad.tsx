import * as React from "react";
import { SVGProps } from "react";

const SvgMemoPad = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M104 320h240c4.4 0 8-3.6 8-8s-3.6-8-8-8H104c-4.41 0-8 3.6-8 8s3.59 8 8 8zm0-96h240c4.4 0 8-3.6 8-8s-3.6-8-8-8H104c-4.41 0-8 3.6-8 8s3.59 8 8 8zm0 192h144c4.406 0 8-3.594 8-8s-3.594-8-8-8H104c-4.41 0-8 3.6-8 8s3.59 8 8 8zM384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm48 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V128h416v320zm0-336H16V64c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v48z" />
  </svg>
);

export default SvgMemoPad;

import * as React from "react";
import { SVGProps } from "react";

const SvgFileLines = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M374.6 150.6 233.3 9.3a31.99 31.99 0 0 0-22.62-9.373L64 0C28.65 0 0 28.65 0 64l.006 384c0 35.35 28.65 64 64 64H320c35.35 0 64-28.65 64-64V173.3c0-8.5-3.4-16.7-9.4-22.7zM224 22.63l137.4 137.4H248c-13.22 0-24-10.77-24-24V22.63zM368 447.1c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48v-384c0-26.47 21.53-48 48-48h144v119.1c0 22.06 17.94 40 40 40h120v272.9zm-272-184c0 4.406 3.594 8 8 8h176c4.406 0 8-3.594 8-8s-3.594-8-8-8H104c-4.41 0-8 4.5-8 8zm184 56H104c-4.406 0-8 3.594-8 8s3.594 8 8 8h176c4.406 0 8-3.594 8-8s-3.6-8-8-8zm0 64H104c-4.406 0-8 3.594-8 8s3.594 8 8 8h176c4.406 0 8-3.594 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgFileLines;
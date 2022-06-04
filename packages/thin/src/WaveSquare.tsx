import * as React from "react";
import { SVGProps } from "react";

const SvgWaveSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M640 256c0 4.4-3.6 8-8 8H512c-13.22 0-24 10.78-24 24v128c0 22.06-17.94 40-40 40h-96c-22.06 0-40-17.94-40-40V96c0-13.22-10.78-24-24-24h-96c-13.2 0-24 10.78-24 24v128c0 22.06-17.94 40-40 40H8c-4.406 0-8-3.6-8-8s3.594-8 8-8h120c13.22 0 24-10.78 24-24V96c0-22.06 17.94-40 40-40h96c22.06 0 40 17.94 40 40v320c0 13.22 10.78 24 24 24h96c13.22 0 24-10.78 24-24V288c0-22.06 17.94-40 40-40h120c4.4 0 8 3.6 8 8z" />
  </svg>
);

export default SvgWaveSquare;

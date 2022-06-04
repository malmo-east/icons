import * as React from "react";
import { SVGProps } from "react";

const SvgObjectSubtract = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-96H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h224c35.3 0 64 28.65 64 64v96h96c35.3 0 64 28.7 64 64v224zM288 64H64v224h224V64z" />
  </svg>
);

export default SvgObjectSubtract;

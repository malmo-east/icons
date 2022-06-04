import * as React from "react";
import { SVGProps } from "react";

const SvgObjectUnion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 352c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h224c35.3 0 64 28.65 64 64v96h96c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-96H64zm112-16v112c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V224c0-26.5-21.5-48-48-48H336V64c0-26.51-21.5-48-48-48H64c-26.51 0-48 21.49-48 48v224c0 26.5 21.49 48 48 48h112z" />
  </svg>
);

export default SvgObjectUnion;

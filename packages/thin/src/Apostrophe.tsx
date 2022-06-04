import * as React from "react";
import { SVGProps } from "react";

const SvgApostrophe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M192 112c0-44.18-35.8-80-80-80s-80 35.82-80 80c0 44.2 35.82 80 80 80 26.29 0 49.42-12.85 64-32.44V184c0 48.53-39.47 88-88 88H72c-4.41 0-8 3.6-8 8s3.59 8 8 8h16c57.3 0 104-46.7 104-104v-64c0-.611-.52-.994-.648-1.564.148-2.136.648-4.236.648-6.436zm-80 64c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.7 64-64 64z" />
  </svg>
);

export default SvgApostrophe;

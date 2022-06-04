import * as React from "react";
import { SVGProps } from "react";

const SvgSoap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M320 240c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.65-64 64c0 35.3 28.7 64 64 64zm0-96c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32c0-17.7 14.3-32 32-32zm80-48c26.5 0 48-21.53 48-48S426.5 0 400 0s-48 21.53-48 48 21.5 48 48 48zm0-64c8.8 0 16 7.17 16 16s-7.2 16-16 16-16-7.17-16-16 7.2-16 16-16zm34.4 161.8c-9.6-1.9-18.4 6-18.4 15.8 0 7.771 5.658 14.15 13.26 15.76C458.2 231.5 480 257.3 480 288v128c0 35.35-28.65 64-64 64H96c-35.35 0-64-28.65-64-64V288c0-35.35 28.65-64 64-64h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-53.02 0-96 42.1-96 96v128c0 53.02 42.98 96 96 96h320c53.02 0 96-42.98 96-96V288c0-46.7-33.4-85.6-77.6-94.2zM160 272c-44.18 0-80 35.82-80 80s35.82 80 80 80h192c44.18 0 80-35.82 80-80s-35.8-80-80-80H160zm240 80c0 26.47-21.53 48-48 48H160c-26.47 0-48-21.53-48-48s21.5-48 48-48h192c26.5 0 48 21.5 48 48zM192 128c35.35 0 64-28.65 64-64S227.3 0 192 0s-64 28.65-64 64 28.7 64 64 64zm0-96c17.64 0 32 14.36 32 32s-14.4 32-32 32-32-14.36-32-32 14.4-32 32-32z" />
  </svg>
);

export default SvgSoap;

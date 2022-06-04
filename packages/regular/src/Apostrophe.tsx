import * as React from "react";
import { SVGProps } from "react";

const SvgApostrophe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M96 32C42.98 32 0 74.98 0 128s42.98 96 96 96c17.58 0 33.83-5.068 48-13.31V232c0 39.7-32.31 72-72 72H56c-13.25 0-24 10.8-24 24s10.75 24 24 24h16c66.2 0 120-53.8 120-120V128c0-53.02-43-96-96-96zm0 144c-26.47 0-48-21.5-48-48s21.53-48 48-48 48 21.53 48 48-21.5 48-48 48z" />
  </svg>
);

export default SvgApostrophe;
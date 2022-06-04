import * as React from "react";
import { SVGProps } from "react";

const SvgVanShuttle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M592 384h-16c0 53-43 96-96 96-53.9 0-96-43-96-96H256c0 53-43 96-96 96-53.9 0-96-43-96-96H48c-26.51 0-48-21.5-48-48V104c0-39.76 32.24-72 72-72h393.1c18 0 36.8 8.34 49 22.78l110 131.72c10.6 10.6 15.9 26.1 15.9 41.2V336c0 26.5-21.5 48-48 48zM64 192h96V96H72c-4.42 0-8 3.58-8 8v88zm481.1 0-80-96H384v96h161.1zM320 192V96h-96v96h96zm160 144c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-320 96c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
  </svg>
);

export default SvgVanShuttle;

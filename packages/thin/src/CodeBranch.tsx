import * as React from "react";
import { SVGProps } from "react";

const SvgCodeBranch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M144 64c0 32.64-24.4 59.6-56 63.5v169c18.4-29.1 50.9-48.5 88-48.5h96c48.6 0 88-39.4 88-88v-32.5c-31.6-3.9-56-30.86-56-63.5 0-35.35 28.7-64 64-64s64 28.65 64 64c0 32.64-24.4 59.6-56 63.5V160c0 57.4-46.6 104-104 104h-96c-48.6 0-88 39.4-88 88v32.5c31.6 3.9 56 30.9 56 63.5 0 35.3-28.7 64-64 64-35.35 0-64-28.7-64-64 0-32.6 24.43-59.6 56-63.5v-257C40.43 123.6 16 96.64 16 64 16 28.65 44.65 0 80 0c35.3 0 64 28.65 64 64zm-64 48c26.5 0 48-21.49 48-48s-21.5-48-48-48c-26.51 0-48 21.49-48 48s21.49 48 48 48zm288-96c-26.5 0-48 21.49-48 48s21.5 48 48 48 48-21.49 48-48-21.5-48-48-48zM80 496c26.5 0 48-21.5 48-48s-21.5-48-48-48c-26.51 0-48 21.5-48 48s21.49 48 48 48z" />
  </svg>
);

export default SvgCodeBranch;
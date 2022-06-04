import * as React from "react";
import { SVGProps } from "react";

const SvgPercent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M376.1 71.03c-9.375-9.375-24.56-9.375-33.94 0l-336 336c-9.375 9.375-9.375 24.56 0 33.94C11.72 445.7 17.84 448 24 448s12.28-2.344 16.97-7.031l336-336c9.33-9.379 9.33-24.559-.87-33.939zM64 176c26.51 0 48-21.49 48-48S90.51 80 64 80s-48 21.5-48 48 21.49 48 48 48zm256 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.5-48-48-48z" />
  </svg>
);

export default SvgPercent;
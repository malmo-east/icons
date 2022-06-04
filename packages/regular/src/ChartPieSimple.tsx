import * as React from "react";
import { SVGProps } from "react";

const SvgChartPieSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M495.4 240H272V16.58C272 7.555 278.1 0 288 0c123.7 0 224 100.3 224 224 0 9-7.6 16-16.6 16zM224 288h221.3c18.5 0 33.3 15.7 29.5 33.8C451.9 430.5 355.5 512 240 512 107.5 512 0 404.6 0 272 0 156.5 81.53 60.12 190.2 37.18 208.3 33.36 224 48.2 224 66.7V288zM176 90.91C101.4 117.3 48 188.4 48 272c0 106 85.1 192 192 192 83.6 0 154.7-53.4 181.1-128H176V90.91z" />
  </svg>
);

export default SvgChartPieSimple;

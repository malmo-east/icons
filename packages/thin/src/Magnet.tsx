import * as React from "react";
import { SVGProps } from "react";

const SvgMagnet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 72c0-22.09 17.91-40 40-40h64c22.1 0 40 17.91 40 40v184c0 44.2 35.8 80 80 80s80-35.8 80-80V72c0-22.09 17.9-40 40-40h64c22.1 0 40 17.91 40 40v184c0 123.7-100.3 224-224 224S0 379.7 0 256V72zm40-24c-13.25 0-24 10.75-24 24v72h112V72c0-13.25-10.7-24-24-24H40zm184 416c114.9 0 208-93.1 208-208v-96H320v96c0 53-43 96-96 96-53.9 0-96-43-96-96v-96H16v96c0 114.9 93.1 208 208 208zm208-320V72c0-13.25-10.7-24-24-24h-64c-13.3 0-24 10.75-24 24v72h112z" />
  </svg>
);

export default SvgMagnet;

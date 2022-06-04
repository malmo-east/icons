import * as React from "react";
import { SVGProps } from "react";

const SvgMug = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M448 64H48c-8.8 0-16 7.2-16 16v272c0 53.02 42.98 96 96 96h192c53.02 0 96-42.98 96-96v-32h26.38c66.83 0 126.6-48.78 133-115.3C582.8 128.4 522.8 64 448 64zm-80 288c0 26.4-21.6 48-48 48H128c-26.4 0-48-21.6-48-48V112h288v240zm80-80h-32V112h32c44.13 0 80 35.88 80 80s-35.9 80-80 80z" />
  </svg>
);

export default SvgMug;

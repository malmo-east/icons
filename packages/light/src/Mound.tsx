import * as React from "react";
import { SVGProps } from "react";

const SvgMound = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M431.9 179.2 540.4 368c12.3 21.4-3.1 48-27.7 48H63.31c-24.61 0-40-26.6-27.74-48L144.1 179.2C173.8 127.7 228.6 96 288 96c59.4 0 114.2 31.7 143.9 83.2zM512.7 384 404.1 195.2C380.2 153.6 335.9 128 288 128c-47.9 0-92.2 25.6-116.1 67.2L63.31 384H512.7z" />
  </svg>
);

export default SvgMound;

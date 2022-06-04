import * as React from "react";
import { SVGProps } from "react";

const SvgCircleG = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm112-224h-74.66c-8.844 0-16 7.156-16 16s7.156 16 16 16h53.59c-5.344 13.41-13.59 26.42-23.06 35.89-36.25 36.25-99.5 36.25-135.8 0C169.1 305.8 160 281.6 160 256s9.1-49.75 28.12-67.89c36-36.05 94-37.64 131.8-3.672 6.594 5.891 16.72 5.375 22.59-1.25 5.906-6.578 5.344-16.69-1.219-22.59-50.59-45.3-127.8-43.13-175.8 4.891-49.91 49.91-49.91 131.1 0 181C189.7 370.7 221.8 384 256 384s66.34-13.31 90.5-37.48c18.28-18.28 32.56-45.39 37.25-70.78.15-.94.25-3.64.25-3.74 0-8.8-7.2-16-16-16z" />
  </svg>
);

export default SvgCircleG;

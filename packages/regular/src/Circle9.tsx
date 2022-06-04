import * as React from "react";
import { SVGProps } from "react";

const SvgCircle9 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm0-336c-52.9 0-96 43.1-96 96 0 43.86 29.73 80.53 69.98 91.96l-29.76 25.94c-9.969 8.719-11.03 23.88-2.312 33.88C202.7 381.2 209.3 384 216 384c5.594 0 11.22-1.938 15.78-5.906l79.94-69.69C324.5 297.3 352 265.3 352 224c0-52.9-43.1-96-96-96zm46 109.7c-6 20.2-24.9 34.3-46 34.3-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.53 48 48c0 4.7-.7 9.3-2 13.7z" />
  </svg>
);

export default SvgCircle9;
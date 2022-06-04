import * as React from "react";
import { SVGProps } from "react";

const SvgTrain = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M184 320c0-22.1 17.9-40 40-40s40 17.9 40 40-17.9 40-40 40-40-17.9-40-40zM352 0c53 0 96 42.98 96 96v256c0 42.8-28 79-66.6 91.4l26.7 27.6c10.2 9.4 10.2 24.6 0 33.1-8.5 10.2-23.7 10.2-33.1 0L318.1 448H129.9l-56.93 56.1c-9.37 10.2-24.57 10.2-33.94 0-9.37-8.5-9.37-23.7 0-33.1l27.6-27.6C27.98 431 0 394.8 0 352V96C0 42.98 42.98 0 96 0h256zm0 48H96c-26.51 0-48 21.49-48 48v96h352V96c0-26.51-21.5-48-48-48zM96 400h256c26.5 0 48-21.5 48-48V240H48v112c0 26.5 21.49 48 48 48z" />
  </svg>
);

export default SvgTrain;
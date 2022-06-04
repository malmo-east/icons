import * as React from "react";
import { SVGProps } from "react";

const SvgBox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M342.4 32c25.3 0 48.2 14.9 58.5 38.01l41.6 93.59c3.6 8.2 5.5 17 5.5 26V416c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V189.6c0-9 1.879-17.8 5.516-26L47.11 70.01C57.38 46.89 80.3 32 105.6 32h236.8zm0 16H232v128h198c-.6-2.9-1.3-4-2.1-5.9l-41.6-93.59C378.6 59.17 361.4 48 342.4 48zM432 192H16v224c0 26.5 21.49 48 48 48h320c26.5 0 48-21.5 48-48V192zM17.96 176H216V48H105.6c-18.98 0-36.17 11.17-43.87 28.51L20.14 170.1c-.86 1.9-1.59 3-2.18 5.9z" />
  </svg>
);

export default SvgBox;

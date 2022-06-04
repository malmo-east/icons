import * as React from "react";
import { SVGProps } from "react";

const SvgMessagePlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 0H64C28.75 0 0 28.75 0 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 10.6 5.9 15.6 12.2 15.6 2.367 0 4.781-.746 6.945-2.324L304 415.1h144c35.25 0 64-28.75 64-63.1V63.1C512 28.75 483.3 0 448 0zm48 351.1c0 26.46-21.53 47.1-48 47.1H298.7L176 492.1v-92.09H64c-26.47 0-48-21.53-48-47.1V63.99C16 37.53 37.53 15.1 64 15.1h384c26.47 0 48 21.53 48 47.1v288.9zM344 200h-80v-80c0-4.42-3.578-8-8-8s-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8 0 4.422 3.578 8 8 8h80v80c0 4.4 3.6 8 8 8s8-3.58 8-8v-80h80c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgMessagePlus;

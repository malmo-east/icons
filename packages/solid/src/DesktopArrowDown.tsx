import * as React from "react";
import { SVGProps } from "react";

const SvgDesktopArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M191 135c-9.375 9.375-9.375 24.56 0 33.94l80 80c9.375 9.375 24.56 9.375 33.94 0l80-80c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-39 39.1V24c0-13.25-10.7-24-24-24s-24 10.75-24 24v150.1L224.1 135c-3.8-4.7-9.9-7-16.1-7s-12.3 2.3-17 7zM528 0H352v64h160v224H64V64h160V0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.2 0-24 10.8-24 24s10.8 24 24 24h272c13.25 0 24-10.75 24-24s-10.75-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48z" />
  </svg>
);

export default SvgDesktopArrowDown;

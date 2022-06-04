import * as React from "react";
import { SVGProps } from "react";

const SvgVialCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 56c0-13.25 10.75-24 24-24h208c13.3 0 24 10.75 24 24s-10.7 24-24 24h-8v186.8c-20.2 28.6-32 63.5-32 101.2 0 25.2 5.3 49.1 14.8 70.8-17.3 24.9-46.2 41.2-78.8 41.2-53.02 0-96-43-96-96V80h-8C10.75 80 0 69.25 0 56zm80 136h96V80H80v112zm0 48v144c0 26.5 21.5 48 48 48s48-21.5 48-48V240H80zm432 128c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-99.3-43.3L352 385.4l-28.7-28.7c-6.2-6.3-16.4-6.3-22.6 0-6.3 6.2-6.3 16.4 0 22.6l40 40c6.2 6.3 16.4 6.3 22.6 0l72-72c6.3-6.2 6.3-16.4 0-22.6-6.2-6.3-16.4-6.3-22.6 0z" />
  </svg>
);

export default SvgVialCircleCheck;
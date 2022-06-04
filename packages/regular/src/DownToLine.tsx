import * as React from "react";
import { SVGProps } from "react";

const SvgDownToLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M169.8 374.6c6.2 6.3 14.4 9.4 22.6 9.4s16.38-3.125 22.62-9.375l135.9-150.4C378.8 193.3 356.9 144 315.3 144h-42.91V80c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v64h-43.3c-41.63 0-63.52 49.37-35.58 80.23L169.8 374.6zM160.4 192V80h64v112h89.37l-121.4 137.4L71.01 192h89.39zM360 432H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h336c13.25 0 24-10.75 24-24s-10.7-24-24-24z" />
  </svg>
);

export default SvgDownToLine;
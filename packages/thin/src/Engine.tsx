import * as React from "react";
import { SVGProps } from "react";

const SvgEngine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M320 256c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-32 16c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm64-16c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm32-16c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm-160 16c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm-32 16c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zM416 72c0 4.42-3.6 8-8 8h-96v48h84.6c12.7 0 25 3.7 35.5 10.7l51.4 34.3c17.8 11.9 28.5 31.9 28.5 53.3V384c0 35.3-28.7 64-64 64H279.2c-15 0-29.5-5.2-41-14.8l-59-49.2H112c-26.51 0-48-21.5-48-48v-72H16v80c0 4.4-3.58 8-8 8-4.418 0-8-3.6-8-8V168c0-4.4 3.582-8 8-8 4.42 0 8 3.6 8 8v80h48v-72c0-26.5 21.49-48 48-48h184V80h-96c-4.4 0-8-3.58-8-8s3.6-8 8-8h208c4.4 0 8 3.58 8 8zM80 336c0 17.7 14.33 32 32 32h72.1l64.3 52.9c8.7 7.2 19.5 11.1 30.8 11.1H448c26.5 0 48-21.5 48-48V226.3c0-16.1-8.9-31.1-21.4-40l-51.4-34.2c-7.8-5.3-17.1-8.1-26.6-8.1H112c-17.67 0-32 14.3-32 32v160zm464-112c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32V224zm16 0v192c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16z" />
  </svg>
);

export default SvgEngine;
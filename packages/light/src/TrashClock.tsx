import * as React from "react";
import { SVGProps } from "react";

const SvgTrashClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M432 64c8.8 0 16 7.16 16 16s-7.2 16-16 16h-18.3l-7 97.8c-11.2 1.6-22.2 4.3-32.6 8L381.6 96H66.37l25.3 354.3C92.87 467 106.8 480 123.6 480h172.6c10 12 21.4 22.7 34.2 31.7-2 .2-4 .3-6 .3H123.6c-33.59 0-61.45-25.9-63.85-59.4L34.29 96H16C7.164 96 0 88.84 0 80s7.164-16 16-16h95.1L137 22.56C145.8 8.526 161.2 0 177.7 0h92.6c16.5 0 31.9 8.526 39.8 22.56L336.9 64H432zM177.7 32c-5.5 0-10.6 2.84-13.5 7.52L148.9 64h150.2l-15.3-24.48c-2.9-4.68-8-7.52-13.5-7.52h-92.6zm253.4 256c9.7 0 16 7.2 16 16v48H480c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48.9c-7.9 0-16-7.2-16-16v-64c0-8.8 8.1-16 16-16zM288 368c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm144 112c61.9 0 112-50.1 112-112s-50.1-112-112-112-112 50.1-112 112 50.1 112 112 112z" />
  </svg>
);

export default SvgTrashClock;

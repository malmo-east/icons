import * as React from "react";
import { SVGProps } from "react";

const SvgTrashClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0h120.4c12.1 0 23.2 6.848 28.6 17.69L320 32h96c17.7 0 32 14.33 32 32s-14.3 32-32 32H32C14.33 96 0 81.67 0 64s14.33-32 32-32h96l7.2-14.31zM411.9 193.1c-87.7 10-156.8 84.5-156.8 174.9 0 59.5 30.5 112.1 75.7 144H101.1c-25.35 0-46.33-19.7-47.91-45.9L31.1 128H416l-4.1 65.1zM576 368c0 79.5-64.5 144-144 144s-144.9-64.5-144.9-144S352.5 224 432 224s144 64.5 144 144zm-160.9-64v64c0 8.8 8.1 16 16 16H480c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32.9v-48c0-8.8-6.3-16-16-16-7.9 0-16 7.2-16 16z" />
  </svg>
);

export default SvgTrashClock;

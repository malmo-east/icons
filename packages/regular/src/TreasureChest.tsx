import * as React from "react";
import { SVGProps } from "react";

const SvgTreasureChest = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M448 32H128C57.31 32 0 89.31 0 160v256c0 35.2 28.8 64 64 64h448c35.2 0 64-28.8 64-64V160c0-70.69-57.3-128-128-128zM96 432H64c-8.837 0-16-7.163-16-16V288h48v144zm0-192H48v-80c0-32.75 19.75-60.88 48-73.25V240zm336 192H144V288h80v32c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-32h80v144zM272 288v-32c0-8.875 7.125-16 16-16s16 7.125 16 16v32c0 8.875-7.125 16-16 16s-16-7.1-16-16zm160-48h-80v-16c0-17.67-14.33-32-32-32h-64c-17.7 0-32 14.3-32 32v16h-80V80h288v160zm80 192h-32V288h48v128c0 8.8-7.2 16-16 16zm16-192h-48V86.75c28.3 12.37 48 40.45 48 73.25v80z" />
  </svg>
);

export default SvgTreasureChest;

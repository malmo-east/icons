import * as React from "react";
import { SVGProps } from "react";

const SvgTypewriter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 192h-32V77.26a32 32 0 0 0-9.375-22.63l-45.26-45.26C387.4 3.369 379.2 0 370.8 0H96C78.4 0 64 14.4 64 32v160H32c-17.6 0-32 14.4-32 32v32c0 17.62 14.38 32 32 32v176c0 26.5 21.49 48 48 48h352c26.51 0 48-21.49 48-48V288c17.62 0 32-14.38 32-32v-32c0-17.6-14.4-32-32-32zM128 64h192v48c0 8.9 7.1 16 16 16h48v64h-18.75c-8.5 0-16.62 3.375-22.62 9.375l-13.25 13.25C323.4 220.6 315.3 224 306.8 224H205.3c-8.5 0-16.62-3.375-22.62-9.375L169.4 201.4c-6-6-14.1-9.4-22.6-9.4H128V64zm240 232v16c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8zm-64 64c0-4.375 3.625-8 8-8h16c4.375 0 8 3.625 8 8v16c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8v-16zm-8-40h-16c-4.375 0-8-3.625-8-8v-16c0-4.4 3.6-8 8-8h16c4.375 0 8 3.625 8 8v16c0 4.4-3.6 8-8 8zm-56 40c0-4.4 3.6-8 8-8h16c4.375 0 8 3.625 8 8v16c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8v-16zm-8-40h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8zm-56 40c0-4.4 3.6-8 8-8h16c4.375 0 8 3.625 8 8v16c0 4.4-3.6 8-8 8h-16c-4.375 0-8-3.625-8-8v-16zm-8-40h-16c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8zm-64 0H88c-4.37 0-8-3.6-8-8v-16c0-4.4 3.63-8 8-8h16c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8zm32 64h-16c-4.375 0-8-3.625-8-8v-16c0-4.4 3.6-8 8-8h16c4.375 0 8 3.625 8 8v16c0 4.4-3.6 8-8 8zm232 56c0 4.375-3.625 8-8 8H152c-4.375 0-8-3.625-8-8v-16c0-4.4 3.6-8 8-8h208c4.375 0 8 3.625 8 8v16zm32-64c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8v-16c0-4.375 3.625-8 8-8h16c4.375 0 8 3.625 8 8v16zm32-64c0 4.375-3.625 8-8 8h-16c-4.375 0-8-3.625-8-8v-16c0-4.4 3.6-8 8-8h16c4.375 0 8 3.625 8 8v16z" />
  </svg>
);

export default SvgTypewriter;

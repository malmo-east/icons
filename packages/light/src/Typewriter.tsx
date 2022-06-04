import * as React from "react";
import { SVGProps } from "react";

const SvgTypewriter = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M312 384h16c4.375 0 8-3.625 8-8v-16c0-4.375-3.625-8-8-8h-16c-4.375 0-8 3.625-8 8v16c0 4.4 3.6 8 8 8zm64 0h16c4.375 0 8-3.625 8-8v-16c0-4.375-3.625-8-8-8h-16c-4.375 0-8 3.625-8 8v16c0 4.4 3.6 8 8 8zm-128 0h16c4.375 0 8-3.625 8-8v-16c0-4.375-3.625-8-8-8h-16c-4.375 0-8 3.625-8 8v16c0 4.4 3.6 8 8 8zm216-192h-98.75c-8.5 0-16.62 3.375-22.62 9.375l-13.25 13.25C323.4 220.6 315.3 224 306.8 224H205.3c-8.5 0-16.62-3.375-22.62-9.375L169.4 201.4c-6-6-14.1-9.4-22.6-9.4H48c-26.47 0-48 21.5-48 48v32c0 20.83 13.42 38.43 32 45.05V448c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V317.1c18.6-6.7 32-24.3 32-45.1v-32c0-26.5-21.5-48-48-48zm-16 256c0 17.62-14.38 32-32 32H96c-17.62 0-32-14.38-32-32V320h384v128zm32-176c0 8.8-7.2 16-16 16H48c-8.83 0-16-7.2-16-16v-32c0-8.8 7.17-16 16-16h98.75L160 237.3c12 12 28.3 18.7 45.3 18.7h101.5c17 0 33.2-6.7 45.2-18.7l13.3-13.3H464c8.8 0 16 7.2 16 16v32zM120 384h16c4.375 0 8-3.625 8-8v-16c0-4.4-3.6-8-8-8h-16c-4.375 0-8 3.625-8 8v16c0 4.4 3.6 8 8 8zm64 0h16c4.375 0 8-3.625 8-8v-16c0-4.4-3.6-8-8-8h-16c-4.375 0-8 3.625-8 8v16c0 4.4 3.6 8 8 8zm-24 64h192c8.801 0 16-7.201 16-16 0-8.801-7.199-16-16-16H160c-8.801 0-16 7.199-16 16 0 8.8 7.2 16 16 16zM80 160c8.84 0 16-7.2 16-16V64c0-17.67 14.33-32 32-32h249.4L416 70.63V144c0 8.8 7.2 16 16 16s16-7.2 16-16V70.63c0-8.49-3.4-16.63-9.4-22.63L400 9.375C393.1 3.371 385.9 0 377.4 0H127.1C92.65 0 64 28.65 64 64v80c0 8.8 7.16 16 16 16z" />
  </svg>
);

export default SvgTypewriter;
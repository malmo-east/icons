import * as React from "react";
import { SVGProps } from "react";

const SvgCat = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M416 128c-8.875 0-16 7.125-16 16s7.125 16 16 16 16-7.125 16-16-7.1-16-16-16zM547.5 4.125C541.4 1.375 534.8 0 528 0c-11.62 0-23.12 4.25-32.13 12.38L456.2 48h-16.5l-39.63-35.62C385.94-.37 365.7-3.5 348.44 4.13A47.956 47.956 0 0 0 320 48v112c0 4.25.875 8.25 1.25 12.38l-47 7.125C206.8 189.8 149.6 225.9 112 277v-93c0-48.5-39.5-88-88-88-13.25 0-24 10.8-24 24 0 13.35 10.87 24.13 24.16 24.01C46.69 143.8 64 164.4 64 186.9v212.3c0 73.6 39.4 112.8 88 112.8h184c8.875 0 16-7.125 16-15.1 0-18.5-14.4-32.9-32-32.9h-16.12c-.125-7.375-.75-14.62-1.876-21.75L384 394v70c0 26.4 21.6 48 48 48h32c26.4 0 48-21.6 48-48V270.2c38.1-22.2 64-63.1 64-110.2V48c0-19-11.1-36.12-28.5-43.875zM464 464h-32v-98c0-11.5-6.125-22.12-16.12-27.75-9.876-5.75-22.12-5.625-32.12.125L287.5 395.1c-12.12-25-30.25-46.88-53.5-63.13-7.499-5.25-18.12-2.25-22.5 5.75L204 351.1c-4 7.25-2.5 16.5 4.125 21.38C237.3 393.6 255 427.5 255.8 464H152c-22 0-40-17.1-40-39.1 0-99.25 71.25-182.1 169.5-197l53.5-8.125C356.4 259.8 398.8 288 448 288c5.5 0 10.75-1 16-1.625V464zm64-304c0 44.12-35.88 80-80 80s-80-35.87-80-79.99V48l53.4 48h53.25L528 48v112zm-64-16c0 8.9 7.1 16 16 16s16-7.125 16-15.1-7.1-16.9-16-16.9-16 7.1-16 16z" />
  </svg>
);

export default SvgCat;

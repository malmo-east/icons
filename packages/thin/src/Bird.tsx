import * as React from "react";
import { SVGProps } from "react";

const SvgBird = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M320 111.1c0-7.9 7.2-16 16-16s16 8.1 16 16c0 9.7-7.2 16-16 16s-16-6.3-16-16zm-35.2 277.3 66.1 111.5c2.2 3.8 1 8.7-2.8 11-3.8 2.2-8.7 1-11-2.8l-68.1-115c-17.4 4.5-35.6 6.9-54.3 6.9-5.5 0-11-.2-16.4-.6l55.8 100.7c3 3.8 1.7 8.7-2.2 10-3.8 3-8.7 1.7-10.9-2.2l-62.4-111.8C77.69 379.8 0 292.2 0 186.7 0 171.9 11.94 160 26.67 160H192c17.7 0 32-14.3 32-32v-24C224 46.56 270.6 0 328 0c46.5 0 85.8 30.5 99.2 72.57l80.9 48.53c2.4 1.5 3.9 4.1 3.9 6 0 3.7-1.5 6.3-3.9 7.8L432 180.5v2.6c0 95.7-61.9 176.2-147.2 205.3zM240 103.1v24c0 27.4-21.5 48-48 48H26.67c-5.89 0-10.67 5.7-10.67 11.6C16 295.5 105.5 384 214.7 384 325.2 384 416 294.3 416 183.1v-80c0-6.33-.9-13.36-2.5-20.08l-.5-.28.3-.46c-9.7-38.1-44.2-67.18-85.3-67.18-48.6 0-88 40.3-88 88zm192 58.8 56.5-34.8-57-33.27c.3 3.35.5 6.77.5 9.27v58.8z" />
  </svg>
);

export default SvgBird;

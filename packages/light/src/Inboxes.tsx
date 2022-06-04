import * as React from "react";
import { SVGProps } from "react";

const SvgInboxes = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M507.7 180.9 445.71 20.1C440.8 7.969 429.1 0 416 0H96C82.91 0 71.16 7.969 66.28 20.12L4.287 180.9A63.548 63.548 0 0 0 0 203.9v67.2c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-67.2c0-7.9-1.5-15.7-4.3-23zM96 32h320l-.139-.361L465.4 160H384c-6.062 0-11.59 3.438-14.31 8.844L342.1 224H169.9l-27.6-55.2c-2.7-5.4-8.2-8.8-14.3-8.8H46.64L96 32zm384 240c0 8.8-7.2 16-16 16H48c-8.82 0-16-7.2-16-16v-68.1c0-3.955.72-7.828 2.145-11.52l.155-.38h83.8l27.58 55.16C148.4 252.6 153.9 256 160 256h192c6.062 0 11.59-3.438 14.31-8.844L393.9 192h83.81l.154.398C479.3 196.1 480 199.1 480 203.9V272zm-16 80h-80c-6.061 0-11.6 3.424-14.31 8.844L342.1 416H169.9l-27.58-55.15A15.932 15.932 0 0 0 128 352H48c-26.51 0-48 21.5-48 48v64c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-64c0-26.5-21.5-48-48-48zm16 112c0 8.836-7.162 16-16 16H48c-8.84 0-16-7.2-16-16v-64c0-8.8 7.16-16 16-16h70.11l27.58 55.16c2.71 5.44 8.21 8.84 13.41 8.84H352c6.062 0 11.6-3.424 14.31-8.846L393.9 384H464c8.838 0 16 7.164 16 16v64z" />
  </svg>
);

export default SvgInboxes;

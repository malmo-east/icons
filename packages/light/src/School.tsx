import * as React from "react";
import { SVGProps } from "react";

const SvgSchool = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M96 223.1c0-16.8 14.3-32 32-32h32c17.7 0 32 15.2 32 32v32c0 18.6-14.3 32-32 32h-32c-17.7 0-32-13.4-32-32v-32zm64 0h-32v32h32v-32zm352-32c17.7 0 32 15.2 32 32v32c0 18.6-14.3 32-32 32h-32c-17.7 0-32-13.4-32-32v-32c0-16.8 14.3-32 32-32h32zm-32 64h32v-32h-32v32zM96 352c0-17.7 14.3-32.9 32-32.9h32c17.7 0 32 15.2 32 32.9v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64zm64 0h-32v64h32v-64zm352-32.9c17.7 0 32 15.2 32 32.9v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32.9 32-32.9h32zM480 416h32v-64h-32v64zM336 175.1h8c8.8 0 16 8.1 16 16 0 9.7-7.2 16-16 16h-24c-8.8 0-16-6.3-16-16v-32c0-7.9 7.2-16 16-16s16 8.1 16 16v16zm-112 16c0-53 42.1-96 96-96 53 0 96 43 96 96 0 53.9-43 96-96 96-53.9 0-96-42.1-96-96zm96 64c35.3 0 64-27.8 64-64 0-34.4-28.7-64-64-64s-64 29.6-64 64c0 36.2 28.7 64 64 64zm150.8-142 117.8 23.5c29.9 6 51.4 32.2 51.4 62.8V448c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V199.4c0-30.6 21.53-56.8 51.45-62.8l117.75-23.5 141-109.73c4.9-4.493 13.8-4.493 19.6 0l141 109.73zM384 384v96h192c17.7 0 32-14.3 32-32V199.4c0-15.3-10.8-29.3-25.7-32.3l-121.4-23.4c-2.5-.5-4.8-1.5-6.7-3.1L320 36.27 185.8 140.6c-1.9 1.6-4.2 2.6-6.7 3.1L57.72 167.1c-14.95 3-25.72 17-25.72 32.3V448c0 17.7 14.33 32 32 32h192v-96c0-35.3 28.7-64.9 64-64.9s64 29.6 64 64.9zm-32 96v-96c0-17.7-14.3-32-32-32s-32 14.3-32 32v96h64z" />
  </svg>
);

export default SvgSchool;
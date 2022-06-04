import * as React from "react";
import { SVGProps } from "react";

const SvgHospital = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M336 80v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32V80c0-8.84 7.2-16 16-16s16 7.16 16 16zM160 64c0-35.35 28.7-64 64-64h192c35.3 0 64 28.65 64 64v32h96c35.3 0 64 28.7 64 64v288c0 35.4-28.7 64-64 64H64c-35.35 0-64-28.6-64-64V160c0-35.3 28.65-64 64-64h96V64zm320 416h96c17.7 0 32-14.3 32-32V320h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-64h-80c-8.8 0-16-7.2-16-16s7.2-16 16-16h80v-32c0-17.7-14.3-32-32-32h-96v352zM64 128c-17.67 0-32 14.3-32 32v32h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v64h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v128c0 17.7 14.33 32 32 32h96V128H64zm288 352v-64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64h64zm96 0V64c0-17.67-14.3-32-32-32H224c-17.7 0-32 14.33-32 32v416h64v-64c0-35.3 28.7-64 64-64s64 28.7 64 64v64h64z" />
  </svg>
);

export default SvgHospital;
import * as React from "react";
import { SVGProps } from "react";

const SvgSendBack = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M152 64c22.1 0 40 17.91 40 40v48c0 22.1-17.9 40-40 40h-48c-22.09 0-40-17.9-40-40v-48c0-22.09 17.91-40 40-40h48zm0 32h-48c-4.42 0-8 3.58-8 8v48c0 4.4 3.58 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.42-3.6-8-8-8zm40-96c35.3 0 64 28.65 64 64v128c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h128zm0 32H64c-17.67 0-32 14.33-32 32v128c0 17.7 14.33 32 32 32h128c17.7 0 32-14.3 32-32V64c0-17.67-14.3-32-32-32zm256 328c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-48zm32 0v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm96-104c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H448c-35.3 0-64-28.7-64-64V320c0-35.3 28.7-64 64-64h128zm0 32H448c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32zm-384 16v48c0 17.7 14.3 32 32 32h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H224c-35.3 0-64-28.7-64-64v-48c0-8.8 7.2-16 16-16s16 7.2 16 16zM416 96c35.3 0 64 28.7 64 64v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48c0-17.7-14.3-32-32-32H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h112z" />
  </svg>
);

export default SvgSendBack;

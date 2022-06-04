import * as React from "react";
import { SVGProps } from "react";

const SvgVectorSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M416 32c17.7 0 32 14.33 32 32v64c0 17.7-14.3 32-32 32h-8v192h8c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-8H128v8c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32v-64c0-17.7 14.33-32 32-32h8V160h-8c-17.67 0-32-14.3-32-32V64c0-17.67 14.33-32 32-32h64c17.7 0 32 14.33 32 32v8h192v-8c0-17.67 14.3-32 32-32h64zm-56 40v48h48V72h-48zM88 352h8c17.7 0 32 14.3 32 32v8h192v-8c0-17.7 14.3-32 32-32h8V160h-8c-17.7 0-32-14.3-32-32v-8H128v8c0 17.7-14.3 32-32 32h-8v192zm0 88v-48H40v48h48zm320 0v-48h-48v48h48zM88 120V72H40v48h48z" />
  </svg>
);

export default SvgVectorSquare;

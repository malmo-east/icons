import * as React from "react";
import { SVGProps } from "react";

const SvgShredder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M208 352c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V368c0-8.8-7.2-16-16-16zm96 0c-8.844 0-16 7.156-16 16v128c0 8.844 7.156 16 16 16s16-7.156 16-16V368c0-8.8-7.2-16-16-16zm-192 0c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V368c0-8.8-7.2-16-16-16zm336-160V70.63c0-8.49-3.4-16.63-9.4-22.63L400 9.375C393.1 3.371 385.9 0 377.4 0H128C92.65 0 64 28.65 64 64v128c-35.3 0-64 28.7-64 64v112c0 8.8 7.156 16 16 16s16-7.2 16-16V256c0-17.67 14.33-32 32-32h384c17.67 0 32 14.33 32 32v112c0 8.844 7.156 16 16 16s16-7.156 16-16V256c0-35.3-28.7-64-64-64zm-32 0H96V64c0-17.67 14.33-32 32-32h249.4L416 70.63V192zm-16 160c-8.844 0-16 7.156-16 16v128c0 8.844 7.156 16 16 16s16-7.156 16-16V368c0-8.8-7.2-16-16-16zm32-104c-13.25 0-24 10.74-24 24 0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.3-10.7-24-24-24z" />
  </svg>
);

export default SvgShredder;

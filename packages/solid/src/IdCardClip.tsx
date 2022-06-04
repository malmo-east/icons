import * as React from "react";
import { SVGProps } from "react";

const SvgIdCardClip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M256 128h64c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32h-64c-17.7 0-32 14.33-32 32v64c0 17.7 14.3 32 32 32zm272-64H384v48c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V64H48C21.49 64 0 85.49 0 112v352c0 26.5 21.49 48 48 48h480c26.51 0 48-21.49 48-48V112c0-26.51-21.5-48-48-48zM288 224c35.35 0 64 28.66 64 64s-28.65 64-64 64-64-28.66-64-64 28.7-64 64-64zm96 224H192c-8.836 0-16-7.164-16-16 0-26.5 21.5-48 48-48h128c26.51 0 48 21.49 48 48 0 8.8-7.2 16-16 16z" />
  </svg>
);

export default SvgIdCardClip;

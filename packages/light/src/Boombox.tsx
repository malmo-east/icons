import * as React from "react";
import { SVGProps } from "react";

const SvgBoombox = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 160V80c0-44.11-35.9-80-80-80H144C99.88 0 64 35.89 64 80v80c-35.35 0-64 28.7-64 64v224c0 35.35 28.65 64 64 64h512c35.35 0 64-28.65 64-64V224c0-35.3-28.7-64-64-64zM96 80c0-26.47 21.5-48 48-48h352c26.5 0 48 21.53 48 48v80H96V80zm512 368c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V224c0-17.64 14.36-32 32-32h512c17.64 0 32 14.36 32 32v224zM176 224c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 192c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zm288-192c-61.9 0-112 50.1-112 112s50.14 112 112 112 112-50.14 112-112-50.1-112-112-112zm0 192c-44.11 0-80-35.89-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80zM240 96h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm192 0h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-96 0h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
  </svg>
);

export default SvgBoombox;

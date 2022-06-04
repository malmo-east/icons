import * as React from "react";
import { SVGProps } from "react";

const SvgClapperboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM254.1 80h67.88l-80 80H174.1l80-80zM48 126.1 94.06 80h67.88l-80 80H48v-33.9zM464 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V208h416v208zm0-318.06L401.9 160h-67.88l80-80H448c8.822 0 16 7.178 16 16v1.94z" />
  </svg>
);

export default SvgClapperboard;
import * as React from "react";
import { SVGProps } from "react";

const SvgClipboardUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 64h-49.61C262.1 27.48 230.7 0 192 0s-71 27.48-78.4 64H64C28.65 64 0 92.66 0 128v320c0 35.34 28.65 64 64 64h256c35.35 0 64-28.66 64-64V128c0-35.34-28.7-64-64-64zM192 48c13.23 0 24 10.77 24 24s-10.8 24-24 24-24-10.77-24-24 10.8-24 24-24zm144 400c0 8.82-7.178 16-16 16h-1.613C310.7 418.6 271.5 384 224 384h-64c-47.54 0-86.73 34.64-94.39 80H64c-8.822 0-16-7.18-16-16V128c0-8.82 7.178-16 16-16h18.26c-1.33 5.1-2.26 10.4-2.26 16v16c0 8.8 7.16 16 16 16h192c8.836 0 16-7.164 16-16v-16c0-5.559-.932-10.86-2.264-16H320c8.822 0 16 7.18 16 16v320zM192 224c-35.3 0-64 28.7-64 64 0 35.34 28.65 64 64 64s64-28.66 64-64c0-35.3-28.7-64-64-64z" />
  </svg>
);

export default SvgClipboardUser;
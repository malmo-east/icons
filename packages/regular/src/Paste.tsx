import * as React from "react";
import { SVGProps } from "react";

const SvgPaste = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m502.6 198.6-61.25-61.25A31.901 31.901 0 0 0 418.8 128H256c-35.3 0-64.9 28.7-64 64l.006 255.1C192 483.3 220.7 512 256 512h192c35.2 0 64-28.8 64-64l.01-226.7c-.01-8.5-3.41-16.7-9.41-22.7zM464 448c0 8.836-7.164 16-16 16H256c-8.838 0-16-7.164-16-16V192.1c0-8.836 7.164-16 16-16h128V224c0 17.67 14.33 32 32 32h48.01v192zM317.7 96c-7.1-27.55-31.9-48-61.7-48h-40.8C211.3 20.93 188.1 0 160 0s-51.3 20.93-55.2 48H64C28.65 48 0 76.65 0 112v272c0 35.34 28.65 64 64 64h96v-48H64c-8.836 0-16-7.164-16-16V112c0-8.8 7.18-16 16-16h16v16c0 17.67 14.33 32 32 32h61.35C190 115.4 220.6 96 256 96h61.7zM160 72c-8.822 0-16-7.176-16-16s7.178-16 16-16 16 7.176 16 16-7.2 16-16 16z" />
  </svg>
);

export default SvgPaste;
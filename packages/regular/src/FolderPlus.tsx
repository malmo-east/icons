import * as React from "react";
import { SVGProps } from "react";

const SvgFolderPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96H275.9l-49.2-45.25C214.7 38.74 198.5 32 181.5 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h384c35.34 0 64-28.66 64-64V160c0-35.3-28.7-64-64-64zm16 320c0 8.824-7.18 16-16 16H64c-8.82 0-16-7.176-16-16V96c0-8.824 7.18-16 16-16h117.5a15.88 15.88 0 0 1 11.31 4.688L256 144h192c8.82 0 16 7.176 16 16v256zM336 264h-56v-56.9c-.9-12.4-10.7-23.1-24-23.1s-24 10.7-24 23.1V264h-56.9c-12.4 0-23.1 10.7-23.1 24 0 13.26 10.73 23.1 23.1 23.1h56v56c.9 14.2 11.6 24.9 24.9 24.9 13.26 0 23.1-10.74 23.1-23.1v-57.8h56c14.2 0 24.9-9.8 24.9-23.1s-10.7-24-24-24z" />
  </svg>
);

export default SvgFolderPlus;
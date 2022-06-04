import * as React from "react";
import { SVGProps } from "react";

const SvgFolderXmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96H272l-45.3-45.25C214.7 38.74 198.5 32 181.5 32H64C28.66 32 0 60.65 0 96v320c0 35.35 28.66 64 64 64h384c35.34 0 64-28.65 64-64V160c0-35.3-28.7-64-64-64zm32 320c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h117.5c8.547 0 16.58 3.328 22.62 9.375L258.7 128H448c17.64 0 32 14.36 32 32v256zM331.3 212.7c-6.25-6.25-16.38-6.25-22.62 0L256 265.4l-52.7-52.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L233.4 288l-52.69 52.69c-6.25 6.25-6.25 16.38 0 22.62 6.246 6.246 16.37 6.254 22.62 0L256 310.6l52.69 52.69c6.246 6.246 16.37 6.254 22.62 0 6.25-6.25 6.25-16.38 0-22.62L278.6 288l52.69-52.69c6.31-6.21 6.31-16.41.01-22.61z" />
  </svg>
);

export default SvgFolderXmark;
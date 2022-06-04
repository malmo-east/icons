import * as React from "react";
import { SVGProps } from "react";

const SvgDiceOne = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.62 32 0 60.62 0 96v320c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V96c0-35.38-28.6-64-64-64zm32 384c0 17.62-14.38 32-32 32H64c-17.62 0-32-14.38-32-32V96c0-17.62 14.38-32 32-32h320c17.62 0 32 14.38 32 32v320zM224 232c-13.2 0-24 10.8-24 24 0 13.25 10.75 24 24 24s24-10.8 24-24-10.8-24-24-24z" />
  </svg>
);

export default SvgDiceOne;

import * as React from "react";
import { SVGProps } from "react";

const SvgGameBoardSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 248H232V96c0-4.422-3.578-8-8-8H64c-4.42 0-8 3.58-8 8v160c0 4.422 3.578 8 8 8h152v152c0 4.422 3.578 8 8 8h160c4.422 0 8-3.578 8-8V256c0-4.4-3.6-8-8-8zm-168 0H72V104h144v144zm160 160H232V264h144v144zm8-376H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm48 384c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v320z" />
  </svg>
);

export default SvgGameBoardSimple;

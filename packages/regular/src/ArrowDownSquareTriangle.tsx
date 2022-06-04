import * as React from "react";
import { SVGProps } from "react";

const SvgArrowDownSquareTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 32H320c-17.67 0-31.1 14.33-31.1 32v128c0 17.67 14.33 32 31.1 32h128c17.67 0 32-14.33 32-32V64c0-17.67-14.3-32-32-32zm-16 144h-96V80h96v96zm60.1 262.9-83.13-137.1c-5.375-8.625-14.84-13.76-24.97-13.76-10.13 0-19.53 5.136-24.91 13.76l-83.25 137.1c-11 18.25 2.749 41.13 25 41.13h166.3c22.26-.03 35.96-22.93 24.96-41.13zM336.3 432l47.75-78.88L431.8 432h-95.5zm-94.7-63.4c9-9.758 8.406-24.96-1.344-33.93a23.882 23.882 0 0 0-16.28-6.379c-6.469 0-12.91 2.598-17.62 7.723L152 394.9V56.02C152 42.76 141.25 32 128 32s-24 10.76-24 24.02v338.9l-54.37-58.95c-8.938-9.758-24.12-10.41-33.9-1.344-9.75 8.977-10.34 24.18-1.344 33.93l95.1 104.1c9.062 9.82 26.19 9.82 35.25 0L241.6 368.6z" />
  </svg>
);

export default SvgArrowDownSquareTriangle;

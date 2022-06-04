import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpSquareTriangle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M320 224h128c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32H320c-17.67 0-31.1 14.33-31.1 32v128c-.9 17.7 13.4 32 31.1 32zm16-144h96v96h-96V80zm156.1 358.9-83.13-137.1c-5.375-8.625-14.84-13.76-24.97-13.76-10.13 0-19.53 5.136-24.91 13.76l-83.25 137.1c-11 18.25 2.749 41.13 25 41.13h166.3c22.26-.03 35.96-22.93 24.96-41.13zM336.3 432l47.75-78.88L431.8 432h-95.5zM145.6 39.37c-9.062-9.82-26.19-9.82-35.25 0L14.38 143.4c-9 9.758-8.406 24.96 1.344 33.93 9.779 9.07 24.97 8.414 33.9-1.344L104 117.1V456c0 13.2 10.8 24 24 24s24-10.76 24-24.02V117.1l54.37 58.95c4.719 5.125 11.16 7.723 17.62 7.723 5.812 0 11.66-2.098 16.28-6.379 9.75-8.977 10.34-24.18 1.344-33.93L145.6 39.37z" />
  </svg>
);

export default SvgArrowUpSquareTriangle;
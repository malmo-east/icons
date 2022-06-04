import * as React from "react";
import { SVGProps } from "react";

const SvgArrowUpRightAndArrowDownLeftFromCenter = (
  props: SVGProps<SVGSVGElement>
) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M210.3 290.4 16 484.7V344.1a7.994 7.994 0 0 0-7.995-7.996C3.579 336.1 0 339.6 0 344v159.1c0 5.3 3.575 8.9 7.996 8.9H167.1c4.438 0 7.96-3.59 7.96-7.994a7.994 7.994 0 0 0-7.996-7.996H27.3l194.3-194.3c7.4-7.41-3.9-19.61-11.3-11.31zM504 0H344c-4.438 0-7.96 3.588-7.96 7.994a7.994 7.994 0 0 0 7.996 7.996h140.6l-194.3 194.3c-7.465 7.461 3.815 18.8 11.31 11.31l194.3-194.3v140.6a7.993 7.993 0 0 0 7.995 7.996C508.4 175.9 512 172.4 512 167.1V7.994C512 3.578 508.4 0 504 0z" />
  </svg>
);

export default SvgArrowUpRightAndArrowDownLeftFromCenter;

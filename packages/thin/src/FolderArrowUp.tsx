import * as React from "react";
import { SVGProps } from "react";

const SvgFolderArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96H272l-54.6-54.62c-6-6.01-14.2-9.38-22.7-9.38H48C21.49 32 0 53.49 0 80v352c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48V144c0-26.5-21.5-48-48-48zm32 336c0 17.67-14.33 32-32 32H48c-17.67 0-32-14.33-32-32V80c0-17.67 14.33-32 32-32h140.1c8.486 0 16.62 3.371 22.63 9.371L265.4 112H464c17.67 0 32 14.33 32 32v288zM261.7 186.3c-1.5-1.4-3.5-2.3-5.7-2.3s-4.2.9-5.7 2.3l-96 96c-3.125 3.125-3.125 8.188 0 11.31s8.188 3.125 11.31 0L248 211.3V384c0 4.422 3.578 8 8 8s8-3.578 8-8V211.3l82.34 82.34c1.56 1.56 2.76 2.36 5.66 2.36s4.094-.781 5.656-2.344a7.994 7.994 0 0 0 0-11.31L261.7 186.3z" />
  </svg>
);

export default SvgFolderArrowUp;

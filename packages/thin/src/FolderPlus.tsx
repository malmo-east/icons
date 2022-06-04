import * as React from "react";
import { SVGProps } from "react";

const SvgFolderPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96H272l-54.6-54.62c-6-6.01-14.2-9.38-22.7-9.38H48C21.49 32 0 53.49 0 80v352c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48V144c0-26.5-21.5-48-48-48zm32 336c0 17.67-14.33 32-32 32H48c-17.67 0-32-14.33-32-32V80c0-17.67 14.33-32 32-32h140.1a31.99 31.99 0 0 1 22.62 9.371L265.4 112H464c17.67 0 32 14.33 32 32v288zM344 280h-80v-80c0-4.4-3.6-8-8-8s-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8 0 4.422 3.578 8 8 8h80v80c0 4.4 3.6 8 8 8s8-3.58 8-8v-80h80c4.4 0 8-3.6 8-8s-3.6-8-8-8z" />
  </svg>
);

export default SvgFolderPlus;

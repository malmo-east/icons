import * as React from "react";
import { SVGProps } from "react";

const SvgSquareUp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zM252.3 123.7c-15.1-15.1-41.3-15.3-56.8.2L103 219.7c-11.44 11.5-14.84 28.6-8.66 43.6 6.26 15 20.76 24.7 36.96 24.7H160v72c0 22.06 17.94 40 40 40h48c22.06 0 40-17.94 40-40v-72h28.69c16.25 0 30.75-9.688 36.97-24.69 6.188-14.95 2.812-32-8.562-43.48L252.3 123.7zM316.7 256H256v104c0 4.406-3.594 8-8 8h-48c-4.4 0-8-3.6-8-8V256h-60.7c-6.4 0-11.2-8.9-5.5-13.9l92.5-95.8c4.162-4.205 9.532-1.796 11.12-.203l92.69 96C327 246.1 324.1 256 316.7 256z" />
  </svg>
);

export default SvgSquareUp;
import * as React from "react";
import { SVGProps } from "react";

const SvgCastle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M128 40c0-22.09 17.9-40 40-40h24c22.1 0 40 17.91 40 40v24h32V40c0-22.09 17.9-40 40-40h32c22.1 0 40 17.91 40 40v24h32V40c0-22.09 17.9-40 40-40h24c22.1 0 40 17.91 40 40v184h32v-24c0-22.1 17.9-40 40-40h16c22.1 0 40 17.9 40 40v232c0 44.2-35.8 80-80 80H80c-44.18 0-80-35.8-80-80V200c0-22.1 17.91-40 40-40h16c22.09 0 40 17.9 40 40v24h32V40zm40-8c-4.4 0-8 3.58-8 8v184h320V40c0-4.42-3.6-8-8-8h-24c-4.4 0-8 3.58-8 8v40c0 8.84-7.2 16-16 16h-64c-8.8 0-16-7.16-16-16V40c0-4.42-3.6-8-8-8h-32c-4.4 0-8 3.58-8 8v40c0 8.84-7.2 16-16 16h-64c-8.8 0-16-7.16-16-16V40c0-4.42-3.6-8-8-8h-24zM80 256c-8.84 0-16-7.2-16-16v-40c0-4.4-3.58-8-8-8H40c-4.42 0-8 3.6-8 8v232c0 26.5 21.49 48 48 48h144v-80c0-53.9 42.1-96 96-96 53 0 96 42.1 96 96v80h144c26.5 0 48-21.5 48-48V200c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v40c0 8.8-7.2 16-16 16H80zm240 80c-35.3 0-64 28.7-64 64v80h128v-80c0-35.3-28.7-64-64-64z" />
  </svg>
);

export default SvgCastle;

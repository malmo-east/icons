import * as React from "react";
import { SVGProps } from "react";

const SvgUmbrellaSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M255.1 320c-4.406 0-8.001 3.594-8.001 8v124c0 24.25-19.75 44-44 44s-44-19.75-44-44v-28c0-4.406-3.594-8-8-8s-8 3.594-8 8v28c0 33.09 26.91 60 60 60s60-26.91 60-60V328c.001-4.4-2.699-8-7.999-8zm8-312c0-4.406-3.592-8-7.999-8S247.1 3.594 247.1 8v24h16V8zM256 32C114.8 32 0 143.3 0 280c0 4.4 3.594 8 8 8h496c4.4 0 8-3.6 8-8 0-136.7-114.8-248-256-248zM16.16 272C20.53 147.8 126.4 48 256 48s235.5 99.75 239.8 224H16.16z" />
  </svg>
);

export default SvgUmbrellaSimple;

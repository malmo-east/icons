import * as React from "react";
import { SVGProps } from "react";

const SvgKerning = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m639.2 404.4-152-304c-2.719-5.438-11.59-5.438-14.31 0l-152 304c-1.969 3.938-.375 8.751 3.578 10.72 3.984 1.969 8.766.375 10.73-3.594l37.78-75.57h214.1l37.78 75.57a8.006 8.006 0 0 0 7.156 4.438 8.171 8.171 0 0 0 3.578-.844c3.908-1.92 5.508-6.72 3.608-10.72zm-258.3-85.3L479.96 121l99.06 198.1H380.9zM315.6 96.81c-4-1.88-8.8-.38-10.8 3.59L160 390.1 15.16 100.4c-1.99-3.97-6.77-5.5-10.739-3.59C.468 98.78-1.125 103.6.843 107.5l152 304c1.36 2.719 4.126 4.445 7.157 4.445s5.796-1.726 7.155-4.445l152-304c1.945-3.9.345-8.72-3.555-10.69zM447.6.802c-4-1.875-8.8-.375-10.8 3.594l-248 496c-1.969 3.938-.375 8.751 3.578 10.72a8.171 8.171 0 0 0 3.578.844 8.006 8.006 0 0 0 7.156-4.438l248-496C453.1 7.584 451.5 2.77 447.6.802z" />
  </svg>
);

export default SvgKerning;
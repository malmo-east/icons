import * as React from "react";
import { SVGProps } from "react";

const SvgArrowsLeftRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 6.688-2.812 13.09-7.719 17.62l-104 96C395.7 373.9 389.8 376 384 376c-6.469 0-12.91-2.594-17.62-7.719-9-9.75-8.406-24.94 1.344-33.91L426.6 280H85.38l58.91 54.38c9.75 8.969 10.34 24.16 1.344 33.91C140.9 373.4 134.5 376 128 376c-5.812 0-11.66-2.094-16.28-6.375l-104-96A24 24 0 0 1 0 256c0-6.7 2.812-13.09 7.719-17.62l104-96C121.5 133.3 136.7 134 145.6 143.7c9 9.75 8.406 24.94-1.344 33.91L85.38 232h341.3l-58.91-54.38c-9.75-8.969-10.34-24.16-1.344-33.91C375.3 134 390.5 133.3 400.3 142.4l104 96c4.9 4.5 7.7 10.9 7.7 17.6z" />
  </svg>
);

export default SvgArrowsLeftRight;

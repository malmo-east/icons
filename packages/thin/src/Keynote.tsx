import * as React from "react";
import { SVGProps } from "react";

const SvgKeynote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M509.5 269.2 453.42 157c-4-8.031-12.06-13-21.02-13H136V96c0-30.88 25.12-56 56-56 .582 0 .943-.5 1.49-.617C196.9 53.38 208.9 63.1 224 63.1h96c17.67 0 32-14.33 32-31.1S337.67 0 320 0h-96c-15.05 0-27.1 10.62-30.51 24.62-.59-.12-.89-1.52-1.49-1.52-39.7 0-72 32.31-72 72v48H79.58c-8.953 0-17.02 4.969-21.02 13L2.484 269.2C.859 272.4 0 276 0 279.7v48.34c0 12.97 10.55 23.5 23.5 23.5h224.7c0 .16-.2.26-.2-.44v144H136c-4.422 0-8 3.594-8 8s3.578 8 8 8h240c4.422 0 8-3.594 8-8s-3.578-8-8-8H264v-144c0-.195-.193-.309-.207-.5h224.7c12.95 0 23.5-10.53 23.5-23.5v-47.4c.007-3.7-.893-7.3-2.493-10.5zM224 15.1h96c8.822 0 16 7.176 16 16s-7.2 16-16 16h-96c-8.822 0-16-7.176-16-16s7.2-16 16-16zm-151.12 149a7.482 7.482 0 0 1 6.703-4.125h352.8a7.482 7.482 0 0 1 6.703 4.125l53.94 107.9H18.94l53.94-107.9zM496 327.1c0 4.125-3.359 7.5-7.5 7.5h-465c-4.141 0-7.5-3.375-7.5-7.5v-40h480v40z" />
  </svg>
);

export default SvgKeynote;

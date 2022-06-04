import * as React from "react";
import { SVGProps } from "react";

const SvgLayerPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M440 72h48c4.4 0 8 3.58 8 8s-3.6 8-8 8h-48v48c0 4.4-3.6 8-8 8s-8-3.6-8-8V88h-48c-4.4 0-8-3.58-8-8s3.6-8 8-8h48V24c0-4.42 3.6-8 8-8s8 3.58 8 8v48zm-165.4 67.1 216.5 98.3c8.2 3.3 12.9 9.7 12.9 18.6 0 8-4.7 15.3-12.9 18.6L274.6 372c-5.9 2.6-12.2 4-18.6 4-6.4 0-12.7-1.4-18.6-4L20.03 274.6C12.71 271.3 8 264 8 256c0-8.9 4.71-15.3 12.03-18.6l217.37-98.3c5.9-1.7 12.2-3.1 18.6-3.1 6.4 0 12.7 1.4 18.6 3.1zM26.57 252c-1.56.7-2.57 2.3-2.57 4 0 1.7 1.01 3.3 2.57 3.1l216.53 98.3c4.7 1.7 8.8 2.6 12.9 2.6s8.2-.9 12-2.6l217.4-98.3c.7.2 2.6-1.4 2.6-3.1 0-1.7-1.9-3.3-2.6-4L268 154.6c-3.8-1.7-7.9-2.6-12-2.6s-8.2.9-12.9 2.6L26.57 252zm0 128c-1.56.7-2.57 2.3-2.57 4 0 1.7 1.01 3.3 2.57 3.1l216.53 98.3c4.7 1.7 8.8 2.6 12.9 2.6s8.2-.9 12-2.6l217.4-98.3c.7.2 2.6-1.4 2.6-3.1 0-1.7-1.9-3.3-2.6-4l-40.7-18.2c-4-2.7-5.8-6.6-4-10.6 1.8-4 6.5-5.8 10.6-4l39.8 18.2c8.2 3.3 12.9 9.7 12.9 18.6 0 8-4.7 15.3-12.9 18.6L274.6 500c-5.9 2.6-12.2 4-18.6 4-6.4 0-12.7-1.4-18.6-4L20.03 402.6C12.71 399.3 8 392 8 384c0-8.9 4.71-15.3 12.03-18.6l40.7-18.2c4.03-1.8 8.76 0 10.57 4 1.81 4 0 7.9-4.03 10.6L26.57 380z" />
  </svg>
);

export default SvgLayerPlus;
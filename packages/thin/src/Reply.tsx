import * as React from "react";
import { SVGProps } from "react";

const SvgReply = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 367.1v72c0 5.3-3.6 8.9-8 8.9s-8-3.594-8-8v-72.9c0-66.16-53.83-120-120-120H29.3l175.1 153.1c3.328 2.906 3.672 7.969.75 11.31-.75 3.59-2.95 3.59-5.15 3.59a8.026 8.026 0 0 1-5.266-1.969l-192-168C1 244.5 0 242.3 0 239.1c0-2.313 1-4.503 2.734-6.034l192-168c3.312-2.875 8.359-2.563 11.28.75 2.922 3.344 2.578 8.406-.75 11.31L29.3 231.1H376c74.1 0 136 61 136 136z" />
  </svg>
);

export default SvgReply;
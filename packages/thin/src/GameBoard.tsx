import * as React from "react";
import { SVGProps } from "react";

const SvgGameBoard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm48 384c0 26.47-21.53 48-47.1 48h-320c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 47.1 21.53 47.1 48v320zm-48-248c4.406 0 8-3.594 8-8s-3.594-8-8-8h-56V96c0-4.406-3.594-8-8-8s-8 3.594-8 8v56h-80V96c0-4.406-3.594-8-8-8s-8 3.594-8 8v56h-80V96c0-4.406-3.594-8-8-8s-8 3.594-8 8v56H64c-4.406 0-8 3.594-8 8s3.594 8 8 8h56v80H64c-4.406 0-8 3.594-8 8s3.594 8 8 8h56v80H64c-4.406 0-8 3.594-8 8s3.594 8 8 8h56v56c0 4.406 3.594 8 8 8s8-3.594 8-8v-56h80v56c0 4.406 3.594 8 8 8s8-3.594 8-8v-56h80v56c0 4.406 3.594 8 8 8s8-3.594 8-8v-56h56c4.406 0 8-3.594 8-8s-3.594-8-8-8h-56v-80h56c4.406 0 8-3.594 8-8s-3.594-8-8-8h-56v-80h56zM216 344h-80v-80h80v80zm0-96h-80v-80h80v80zm96 96h-80v-80h80v80zm0-96h-80v-80h80v80z" />
  </svg>
);

export default SvgGameBoard;
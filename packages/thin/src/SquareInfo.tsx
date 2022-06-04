import * as React from "react";
import { SVGProps } from "react";

const SvgSquareInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M223.9 176c8.822 0 16-7.178 16-16s-7.178-16-16-16-16 7.178-16 16 7.2 16 16 16zM256 352h-24.02l.01-135.1c0-.018 0 .018 0 0-.89-5.3-3.59-8.9-7.99-8.9h-32c-4.406 0-8 3.594-8 8s3.6 8 8 8h23.98v128H192c-4.406 0-8 3.594-8 8s3.6 8 8 8h64c4.406 0 8-3.594 8-8s-3.6-8-8-8zM384 32H64C28.66 32 0 60.66 0 96v320c0 35.34 28.66 64 64 64h320c35.35 0 64-28.66 64-64V96c0-35.34-28.7-64-64-64zm48 384c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V96c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48v320z" />
  </svg>
);

export default SvgSquareInfo;

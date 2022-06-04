import * as React from "react";
import { SVGProps } from "react";

const SvgCircleInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 352h-24.02l.01-135.1c0-.018 0 .018 0 0-.89-5.3-3.59-8.9-7.99-8.9h-32c-4.406 0-8 3.594-8 8s3.6 8 8 8h23.98v128H224c-4.406 0-8 3.594-8 8s3.6 8 8 8h64c4.406 0 8-3.594 8-8s-3.6-8-8-8zm-32.1-176c8.822 0 16-7.178 16-16s-7.178-16-16-16-16 7.178-16 16 7.2 16 16 16zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 496C123.7 496 16 388.3 16 256S123.7 16 256 16s240 107.7 240 240-107.7 240-240 240z" />
  </svg>
);

export default SvgCircleInfo;

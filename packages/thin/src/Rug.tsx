import * as React from "react";
import { SVGProps } from "react";

const SvgRug = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M0 72a8 8 0 0 1 8-8h624c4.4 0 8 3.58 8 8s-3.6 8-8 8h-24v80h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v72h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v72h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v80h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h24v-80H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h24v-72H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h24v-72H8c-4.418 0-8-3.6-8-8s3.582-8 8-8h24V80H8a8 8 0 0 1-8-8zm48 360h80V80H48v352zm96 0h352V80H144v352zM512 80v352h80V80h-80z" />
  </svg>
);

export default SvgRug;

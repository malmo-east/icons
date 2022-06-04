import * as React from "react";
import { SVGProps } from "react";

const SvgWalkieTalkie = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M320 96H96V16c0-8.838-7.16-16-16-16S64 7.162 64 16v80c-35.35 0-64 28.7-64 64v133.5a63.98 63.98 0 0 0 18.75 45.25L32 352v96c0 35.35 28.65 64 64 64h192c35.35 0 64-28.65 64-64v-96l13.26-13.26A63.823 63.823 0 0 0 384 293.5V160c0-35.3-28.7-64-64-64zm32 197.5c0 8.547-3.328 16.58-9.371 22.63L320 338.7V448c0 17.64-14.36 32-32 32H96c-17.64 0-32-14.36-32-32V338.7l-22.63-22.6c-6.04-6-9.37-14.1-9.37-22.6V160c0-17.64 14.36-32 32-32h256c17.64 0 32 14.36 32 32v133.5zM176 80h32c8.8 0 16-7.16 16-16s-7.156-16-16-16h-32c-8.8 0-16 7.16-16 16s7.2 16 16 16zm96 96H112c-8.8 0-16 7.2-16 16s7.156 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 64H112c-8.8 0-16 7.2-16 16s7.156 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 64H112c-8.8 0-16 7.2-16 16s7.156 16 16 16h160c8.844 0 16-7.156 16-16s-7.2-16-16-16zm0-224h32c8.8 0 16-7.16 16-16s-7.156-16-16-16h-32c-8.8 0-16 7.16-16 16s7.2 16 16 16z" />
  </svg>
);

export default SvgWalkieTalkie;

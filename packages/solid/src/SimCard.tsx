import * as React from "react";
import { SVGProps } from "react";

const SvgSimCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M0 64v384c0 35.25 28.75 64 64 64h256c35.25 0 64-28.75 64-64V128L256 0H64C28.75 0 0 28.75 0 64zm224 192h-64v-64h64v64zm96 0h-64v-64h32c17.75 0 32 14.25 32 32v32zm-64 128h64v32c0 17.75-14.25 32-32 32h-32v-64zm-96 0h64v64h-64v-64zm-96 0h64v64H96c-17.75 0-32-14.25-32-32v-32zm0-96h256v64H64v-64zm0-64c0-17.75 14.25-32 32-32h32v64H64v-32z" />
  </svg>
);

export default SvgSimCard;

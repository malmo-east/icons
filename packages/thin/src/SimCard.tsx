import * as React from "react";
import { SVGProps } from "react";

const SvgSimCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M256 0H64C28.75 0 0 28.75 0 64v384c0 35.25 28.75 64 64 64h256c35.25 0 64-28.75 64-64V128L256 0zm112 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h185.4L368 134.6V448zM64 224v192c0 17.75 14.25 32 32 32h192c17.75 0 32-14.25 32-32V224c0-17.75-14.25-32-32-32H96c-17.75 0-32 14.3-32 32zm80 208H96c-8.973 0-16-7.029-16-16v-48h64v64zm80 0h-64v-64h64v64zm80-16c0 8.971-7.027 16-16 16h-48v-64h64v48zm0-64H80v-64h224v64zm-64-144h48c8.973 0 16 7.027 16 16v48h-64v-64zm-80 0h64v64h-64v-64zm-16 64H80v-48c0-8.973 7.027-16 16-16h48v64z" />
  </svg>
);

export default SvgSimCard;
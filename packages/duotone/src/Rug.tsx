import * as React from "react";
import { SVGProps } from "react";

const SvgRug = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="rug_svg__fa-primary"
      d="M80 64v384H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h8v-40h-8c-13.25 0-24-10.7-24-24s10.75-24 24-24h8v-32h-8c-13.25 0-24-10.7-24-24s10.75-24 24-24h8v-32h-8c-13.25 0-24-10.7-24-24s10.75-24 24-24h8v-40h-8c-13.25 0-24-10.7-24-24 0-13.25 10.75-24 24-24h56zm536 0c13.3 0 24 10.75 24 24 0 13.3-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56V64h56zm-456 0h32v384h-32V64zm320 384h-32V64h32v384z"
    />
    <path
      d="M80 64h80v384H80V64zm400 0h80v384h-80V64zm-32 384H192V64h256v384z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgRug;

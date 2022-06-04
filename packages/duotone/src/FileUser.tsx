import * as React from "react";
import { SVGProps } from "react";

const SvgFileUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="file-user_svg__fa-primary"
      d="M256 0v128h128L256 0zm-64 320c35.35 0 64-28.66 64-64s-28.65-64-64-64c-35.3 0-64 28.7-64 64s28.7 64 64 64zm32 32h-64c-44.18 0-80 35.81-80 80 0 8.8 7.16 16 16 16h192c8.836 0 16-7.164 16-16 0-44.2-35.8-80-80-80z"
    />
    <path
      d="M256 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V128H256zm-64 64c35.35 0 64 28.66 64 64s-28.65 64-64 64c-35.34 0-64-28.66-64-64s28.7-64 64-64zm96 256H96c-8.836 0-16-7.164-16-16 0-44.2 35.8-80 80-80h64c44.18 0 80 35.81 80 80 0 8.8-7.2 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFileUser;

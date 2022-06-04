import * as React from "react";
import { SVGProps } from "react";

const SvgFolderUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="folder-user_svg__fa-primary"
      d="M256 320c35.35 0 64-28.66 64-64s-28.65-64-64-64-64 28.7-64 64 28.7 64 64 64zm64 32H192c-26.51 0-48 21.49-48 48 0 8.8 7.2 16 16 16h192c8.836 0 16-7.164 16-16 0-26.5-21.5-48-48-48z"
    />
    <path
      d="M464 96H272l-64-64H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zm-208 96c35.35 0 64 28.66 64 64s-28.65 64-64 64-64-28.7-64-64 28.7-64 64-64zm96 224H160c-8.836 0-16-7.164-16-16 0-26.5 21.5-48 48-48h128c26.51 0 48 21.49 48 48 0 8.8-7.2 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFolderUser;

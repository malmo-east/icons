import * as React from "react";
import { SVGProps } from "react";

const SvgImageUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="image-user_svg__fa-primary"
      d="M256 256c35.35 0 64-28.66 64-64s-28.65-64-64-64-64 28.66-64 64 28.7 64 64 64zm32 32h-64c-44.18 0-80 35.82-80 80 0 8.836 7.164 16 16 16h192c8.836 0 16-7.164 16-16 0-44.2-35.8-80-80-80z"
    />
    <path
      d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.5-48-48-48zm-208 96c35.35 0 64 28.66 64 64s-28.65 64-64 64-64-28.66-64-64 28.7-64 64-64zm96 256H160c-8.836 0-16-7.164-16-16 0-44.18 35.82-80 80-80h64c44.18 0 80 35.82 80 80 0 8.8-7.2 16-16 16z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgImageUser;

import * as React from "react";
import { SVGProps } from "react";

const SvgMattressPillow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="mattress-pillow_svg__fa-primary"
      d="M256 64h320c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H256V64z"
    />
    <path
      d="M0 384V128c0-35.35 28.65-64 64-64h192v384H64c-35.35 0-64-28.7-64-64zm96-256c-17.67 0-32 14.3-32 32v192c0 17.7 14.33 32 32 32h64c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H96z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMattressPillow;

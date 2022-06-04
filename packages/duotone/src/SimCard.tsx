import * as React from "react";
import { SVGProps } from "react";

const SvgSimCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="sim-card_svg__fa-primary"
      d="M64 416c0 17.75 14.25 32 32 32h32v-64H64v32zm64-224H96c-17.75 0-32 14.3-32 32v32h64v-64zm96 0h-64v64h64v-64zm-64 256h64v-64h-64v64zm128-256h-32v64h64v-32c0-17.7-14.2-32-32-32zM64 352h256v-64H64v64zm192 96h32c17.75 0 32-14.25 32-32v-32h-64v64z"
    />
    <path
      d="M256 0H64C28.75 0 0 28.75 0 64v384c0 35.25 28.75 64 64 64h256c35.25 0 64-28.75 64-64V128L256 0zm64 416c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V224c0-17.67 14.33-32 32-32h192c17.67 0 32 14.33 32 32v192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSimCard;

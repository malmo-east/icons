import * as React from "react";
import { SVGProps } from "react";

const SvgMobileScreenButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="mobile-screen-button_svg__fa-primary"
      d="M288 63.1v320H96v-320h192z"
    />
    <path
      d="M288 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h192c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm-96 480c-17.75 0-32-14.25-32-32s14.25-32 32-32 32 14.25 32 32-14.2 32-32 32zm96-416.9v320H96v-320h192z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMobileScreenButton;

import * as React from "react";
import { SVGProps } from "react";

const SvgBookUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="book-user_svg__fa-primary"
      d="M96 384h304c26.51 0 48-21.49 48-48V48c0-26.51-21.5-48-48-48H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1 0-18.6-14.3-32.9-32-32.9H97.71c-15.94 0-30.71-10.89-33.27-26.63C61.18 401.3 76.56 384 96 384zM240 64c35.35 0 64 28.66 64 64s-28.65 64-64 64c-35.34 0-64-28.66-64-64s28.7-64 64-64zm-32 160h64c44.2 0 80 35.8 80 80 0 8.836-7.164 16-16 16H144c-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80z"
    />
    <path
      d="M400 384H96c-17.67 0-32 14.33-32 32s14.33 32 32 32h320v-66.94c-5.9 1.74-10.4 2.94-16 2.94z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBookUser;

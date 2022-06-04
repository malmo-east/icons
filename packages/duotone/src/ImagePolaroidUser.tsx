import * as React from "react";
import { SVGProps } from "react";

const SvgImagePolaroidUser = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="image-polaroid-user_svg__fa-primary"
      d="M224 256c35.35 0 64-28.66 64-64s-28.65-64-64-64-64 28.7-64 64 28.7 64 64 64zm160 96h-48c0-35.35-28.65-64-63.1-64h-97.8c-34.4 0-63.1 28.7-63.1 63.1l-48 .9V96h320v256z"
    />
    <path
      d="M400 32H48C21.6 32 0 53.6 0 80v352c0 26.4 21.6 48 48 48h352c26.4 0 48-21.6 48-48V80c0-26.4-21.6-48-48-48zm-16 320H64V96h320v256z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgImagePolaroidUser;

import * as React from "react";
import { SVGProps } from "react";

const SvgQrcode = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="qrcode_svg__fa-primary"
      d="M256 288h96v32h64v-32h32v128h-96v-32h-32v96h-64V288zm128 192h-32v-32h32v32zm64 0h-32v-32h32v32z"
    />
    <path
      d="M144 32c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V80c0-26.51 21.49-48 48-48h96zm-16 64H64v64h64V96zm16 192c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-96c0-26.5 21.49-48 48-48h96zm-16 64H64v64h64v-64zM256 80c0-26.51 21.5-48 48-48h96c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V80zm64 80h64V96h-64v64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgQrcode;

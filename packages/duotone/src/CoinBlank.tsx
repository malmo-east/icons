import * as React from "react";
import { SVGProps } from "react";

const SvgCoinBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="coin-blank_svg__fa-primary"
      d="M48 394.6c-30.21-21-48-46.8-48-75.5v-29c13.21 15.7 29.72 29.3 48 40v64.5zm128-17.3v64.3c-36.2-5.9-68.9-15.8-96-29.5v-63.8c28.4 13.1 60.9 23 96 29zm32 4.3c15.7 1.6 31.7 1.5 48 1.5s32.3.1 48-1.5v64.2c-15.5 1.4-31.6 1.3-48 1.3s-32.5.1-48-1.3v-64.2zm128 60v-64.3c35.1-6 67.6-15.9 96-29v63.8c-27.1 13.7-59.8 23.6-96 29.5zm128-111.5c18.3-10.7 34.8-24.3 48-40v29c0 28.7-17.8 54.5-48 75.5v-64.5z"
    />
    <path
      d="M256 352C114.6 352 0 287.5 0 208S114.6 64 256 64s256 64.5 256 144-114.6 144-256 144z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCoinBlank;

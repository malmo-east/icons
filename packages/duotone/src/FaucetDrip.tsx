import * as React from "react";
import { SVGProps } from "react";

const SvgFaucetDrip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="faucet-drip_svg__fa-primary"
      d="M364.8 32 224 48 83.2 32C73.6 32 64 38.4 64 48v28.8C64 89.6 73.6 96 83.2 96L224 80l140.8 16c9.6 0 19.2-6.4 19.2-16V48c0-9.6-9.6-16-19.2-16zM448 416s-32 44.8-32 64c0 19.2 12.8 32 32 32s32-12.8 32-32-32-64-32-64z"
    />
    <path
      d="M352 192h-38.54c-16-12.8-35.06-22.4-57.46-28.8v-48l-32-3.2-32 3.2v48c-22.4 6.4-41.5 16-57.5 28.8H16c-9.6 0-16 6.4-16 16v96c0 9.6 6.4 16 16 16h92.78c18.32 38.4 64.02 64 115.22 64s96.02-25.6 115.2-64H352c19.2 0 32 12.71 32 31.91 0 19.19 12.8 32.09 32 32.09h64c19.2 0 32-12.8 32-32 0-89.6-70.4-160-160-160zM256 44.8V16c0-9.6-6.4-16-16-16h-32c-9.6 0-16 6.4-16 16v28.8l32 3.2 32-3.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFaucetDrip;

import * as React from "react";
import { SVGProps } from "react";

const SvgNetworkWired = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="network-wired_svg__fa-primary"
      d="M400 0c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48H240c-26.5 0-48-21.5-48-48V48c0-26.51 21.5-48 48-48h160zM256 64v64h128V64H256zm-16 256c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H80c-26.51 0-48-21.5-48-48v-96c0-26.5 21.49-48 48-48h160zM96 384v64h128v-64H96zm256-16c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H400c-26.5 0-48-21.5-48-48v-96zm192 80v-64H416v64h128z"
    />
    <path
      d="M352 224h256c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96v32h-64v-32H192v32h-64v-32H32c-17.67 0-32-14.3-32-32s14.33-32 32-32h256v-32h64v32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgNetworkWired;

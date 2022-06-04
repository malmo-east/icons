import * as React from "react";
import { SVGProps } from "react";

const SvgNetworkWired = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M400 0c26.5 0 48 21.49 48 48v96c0 26.5-21.5 48-48 48h-56v40h272c13.3 0 24 10.7 24 24s-10.7 24-24 24H504v40h56c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H400c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h56v-40H184v40h56c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H80c-26.51 0-48-21.5-48-48v-96c0-26.5 21.49-48 48-48h56v-40H24c-13.25 0-24-10.7-24-24s10.75-24 24-24h272v-40h-56c-26.5 0-48-21.5-48-48V48c0-26.51 21.5-48 48-48h160zm0 48H240v96h160V48zM80 464h160v-96H80v96zm480-96H400v96h160v-96z" />
  </svg>
);

export default SvgNetworkWired;
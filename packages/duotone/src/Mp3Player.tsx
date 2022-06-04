import * as React from "react";
import { SVGProps } from "react";

const SvgMp3Player = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="mp3-player_svg__fa-primary"
      d="M64 64v128h256V64H64zm128 192c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 128c-17.62 0-32-14.38-32-32s14.38-32 32-32 32 14.38 32 32-14.4 32-32 32z"
    />
    <path
      d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM192 448c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm128-256H64V64h256v128z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMp3Player;

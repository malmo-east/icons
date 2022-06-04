import * as React from "react";
import { SVGProps } from "react";

const SvgJugDetergent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="jug-detergent_svg__fa-primary"
      d="M256 128c70.7 0 128 57.3 128 128v224c0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32V256c0-70.7 57.31-128 128-128h128zm32 96c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"
    />
    <path
      d="M200 0c13.3 0 24 10.75 24 24v24h8c13.3 0 24 10.75 24 24s-10.7 24-24 24H88c-13.25 0-24-10.75-24-24s10.75-24 24-24h8V24c0-13.25 10.7-24 24-24h80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgJugDetergent;

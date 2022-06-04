import * as React from "react";
import { SVGProps } from "react";

const SvgHighDefinition = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="high-definition_svg__fa-primary"
      d="M248 160c-13.2 0-24 10.8-24 24v48h-64v-48c0-13.2-10.7-24-24-24s-24 10.8-24 24v144c0 13.3 10.8 24 24 24s24-10.7 24-24v-48h64v48c0 13.3 10.8 24 24 24s24-10.75 24-24V184c0-13.2-10.7-24-24-24zm136 0h-56c-13.25 0-24 10.75-24 24v144c0 13.25 10.75 24 24 24h56c52.94 0 96-43.06 96-96s-43.1-96-96-96zm0 144h-32v-96h32c26.47 0 48 21.53 48 48s-21.5 48-48 48z"
    />
    <path
      d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM272 328c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48h-64v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.2 10.8-24 24-24s24 10.8 24 24v48h64v-48c0-13.2 10.8-24 24-24s24 10.8 24 24v144zm112 24h-56c-13.25 0-24-10.75-24-24V184c0-13.2 10.8-24 24-24h56c52.94 0 96 43.06 96 96s-43.1 96-96 96zm0-144h-32v96h32c26.47 0 48-21.53 48-48s-21.5-48-48-48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgHighDefinition;

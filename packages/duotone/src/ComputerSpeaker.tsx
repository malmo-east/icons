import * as React from "react";
import { SVGProps } from "react";

const SvgComputerSpeaker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="computer-speaker_svg__fa-primary"
      d="M480 160c19.2 0 31.1-12.8 31.1-32S498.3 96 480 96s-32 12.8-32 32c-.9 19.2 12.8 32 32 32zm0 64c-54.4 0-96 41.6-96 96s41.6 96 96 96 96-41.6 96-96-41.6-96-96-96zm0 144c-25.6 0-48-22.4-48-48s22.4-48 48-48 48 22.4 48 48-22.4 48-48 48zM64 320h224V96H63.1l.9 224z"
    />
    <path
      d="M592 32H368c-25.6 0-48 22.4-48 48v352c0 25.6 22.4 48 48 48h224c25.6 0 48-22.4 48-48V80c0-25.6-22.4-48-48-48zM480 96c19.2 0 31.1 12.8 31.1 32s-12.8 32-31.1 32-32-12.8-32-32c-.9-19.2 12.8-32 32-32zm0 320c-54.4 0-96-41.6-96-96s41.6-96 96-96 96 41.6 96 96-41.6 96-96 96zm-192 0H128c-19.2 0-32 12.8-32 32s12.8 32 32 32h176c-9.6-12.8-16-32-16-48v-16zM0 80v256c0 25.6 22.4 48 48 48h240v-64H64l-.9-224H288V80c0-16 6.4-35.2 16-48H48C22.4 32 0 54.4 0 80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgComputerSpeaker;

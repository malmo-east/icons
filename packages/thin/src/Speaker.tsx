import * as React from "react";
import { SVGProps } from "react";

const SvgSpeaker = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 288c-26.48 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm0 80c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32zM336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm32 464c0 17.64-14.36 32-32 32H48c-17.64 0-32-14.36-32-32V48c0-17.64 14.36-32 32-32h288c17.64 0 32 14.36 32 32v416zM192 160c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm0-80c17.64 0 32 14.36 32 32s-14.36 32-32 32-32-14.36-32-32 14.4-32 32-32zm0 144c-61.81 0-112 50.17-112 112s50.2 112 112 112 112-50.17 112-112-50.2-112-112-112zm0 208c-52.94 0-96-43.07-96-96 0-52.94 43.06-96 96-96s96 43.06 96 96c0 52.9-43.1 96-96 96z" />
  </svg>
);

export default SvgSpeaker;

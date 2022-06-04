import * as React from "react";
import { SVGProps } from "react";

const SvgPollPeople = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="poll-people_svg__fa-primary"
      d="M32 48C32 21.49 53.49 0 80 0c26.5 0 48 21.49 48 48s-21.5 48-48 48c-26.51 0-48-21.49-48-48zm64 80c35.3 0 64 28.7 64 64 0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32 0-35.3 28.65-64 64-64h32zm32 208c0 26.5-21.5 48-48 48-26.51 0-48-21.5-48-48s21.49-48 48-48c26.5 0 48 21.5 48 48zm-32 80c35.3 0 64 28.7 64 64 0 17.7-14.3 32-32 32H32c-17.67 0-32-14.3-32-32 0-35.3 28.65-64 64-64h32zM224 80c0-26.51 21.5-48 48-48h208v160H272c-26.5 0-48-21.5-48-48V80zm0 288c0-26.5 21.5-48 48-48h112v160H272c-26.5 0-48-21.5-48-48v-64z"
    />
    <path
      d="M480 128h96V96h-96V32h112c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H480v-64zm-96 288h192v-32H384v-64h208c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H384v-64z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgPollPeople;
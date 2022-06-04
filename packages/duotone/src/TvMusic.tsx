import * as React from "react";
import { SVGProps } from "react";

const SvgTvMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="tv-music_svg__fa-primary"
      d="M64 64v288h512V64H64zm352 192c0 17.62-21.5 32-48 32s-48-14.4-48-32 21.5-32 48-32c5.375 0 10.75.75 16 2v-60.4l-96 37.5V288c0 17.62-21.5 32-48 32s-48-14.4-48-32 21.5-32 48-32c5.4 0 10.8.8 16 2v-98.7c0-7 4.5-13.2 11.3-15.3l128-47.25c4.7-1.5 10.1-.62 14.2 2.38S416 106.9 416 112v144z"
    />
    <path
      d="M512 448H127.1c-16.8 0-31.1 14.3-31.1 31.1s14.3 32.9 31.1 32.9h384c18.6 0 32.9-14.3 32.9-32s-14.3-32-32-32zM592 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h512v288z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgTvMusic;

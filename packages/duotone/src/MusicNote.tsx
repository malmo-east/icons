import * as React from "react";
import { SVGProps } from "react";

const SvgMusicNote = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="music-note_svg__fa-primary"
      d="M256 431.1c0 45-50.1 80.9-112 80.9S32 476.1 32 431.1s50.13-80.01 112-80.01c16.38 0 32.5 2.75 48 8V60.33c0-14 9.125-26.38 22.38-30.5L256 17.55V431.1z"
    />
    <path
      d="M256 148.1V17.55l55-16.22c9.625-2.875 20.12-1.001 28.12 5.001C347.3 12.32 352 21.84 352 31.96v64c0 14.25-9.375 26.75-23 30.75l-73 21.39z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMusicNote;

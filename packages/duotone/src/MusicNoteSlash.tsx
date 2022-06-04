import * as React from "react";
import { SVGProps } from "react";

const SvgMusicNoteSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="music-note-slash_svg__fa-primary"
      d="M630.8 469.1 38.81 5.111A23.961 23.961 0 0 0 24.03.001C16.905 0 9.84 3.158 5.12 9.189c-8.187 10.44-6.37 25.53 4.068 33.7L601.2 506.9c10.5 8.203 25.57 6.328 33.69-4.078 8.21-10.422 6.31-25.522-4.09-33.722z"
    />
    <path
      d="M467.1 6.325c-7.1-6.002-18.5-7.877-28.12-5.002l-96.62 28.5c-13.25 4.125-22.37 16.5-22.37 30.5v165.2l63.1 50.16v-127.6l72.1-21.38c13.62-3.1 22.1-16.5 22.1-30.75v-63.99C479.1 21.84 475.2 12.32 467.1 6.325zM271.1 351.1c-61.86 0-111.1 35.82-111.1 80s50.14 79.1 111.1 79.1 111.1-35.82 111.1-79.1-48.3-80-111.1-80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMusicNoteSlash;

import * as React from "react";
import { SVGProps } from "react";

const SvgMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="music_svg__fa-primary"
      d="M480 0c-2.719 0-7.031.661-9.625 1.49L448 8.092v284.8c-10.05-2.979-20.72-4.898-32.01-4.898-53.02 0-95.1 35.82-95.1 79.1 0 44.18 42.98 79.1 95.1 79.1s95.1-35.82 95.1-80L512 31.99C511.1 14.34 497.7 0 480 0zM128 126.5v230.4c-10.05-2.979-20.72-4.898-32-4.898C42.98 352 0 387.8 0 432s42.98 80 95.1 80 95.1-35.77 95.1-79.95L192 83.69l-41.6 12.28c-12.3 3.9-22.4 17.53-22.4 30.53z"
    />
    <path
      d="M192 224V83.69l256-75.6v140.9L192 224z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMusic;

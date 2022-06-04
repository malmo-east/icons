import * as React from "react";
import { SVGProps } from "react";

const SvgUserMusic = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="user-music_svg__fa-primary"
      d="M640 192v62.73c0 15.25-10.77 28.39-25.72 31.38L544 300.2V440c0 39.76-42.98 72-96 72s-96-32.24-96-72c0-39.77 42.98-72 96-72 11.28 0 21.95 1.727 32 4.408V211.2c0-15.25 10.77-28.39 25.72-31.38l96-19.2C621.5 156.7 640 171.8 640 192z"
    />
    <path
      d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0 96 57.31 96 128s57.3 128 128 128zm165.4 91.7c-30.6-27.1-70.7-43.7-114.7-43.7H173.3C77.61 304 0 381.7 0 477.4 0 496.5 15.52 512 34.66 512h320.5C333.4 493.4 320 468.3 320 440c0-41 28-75.3 69.4-92.3z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgUserMusic;

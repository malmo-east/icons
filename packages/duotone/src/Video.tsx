import * as React from "react";
import { SVGProps } from "react";

const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="video_svg__fa-primary"
      d="M576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56c21.3-14.61 50.4.36 50.4 25.76z"
    />
    <path
      d="M384 112v288c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h288c26.5 0 48 21.49 48 48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgVideo;

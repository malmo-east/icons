import * as React from "react";
import { SVGProps } from "react";

const SvgCircleVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="circle-video_svg__fa-primary"
      d="M320 328c0 13.25-10.75 24-24 24H152c-13.25 0-24-10.75-24-24V184c0-13.26 10.75-24 24-24h144c13.25 0 24 10.74 24 24v144zm96-20.6c0 10.2-11.68 16.16-20.16 10.32L352 287.5v-63l43.84-30.24c8.56-5.86 20.16.14 20.16 10.34v102.8z"
    />
    <path
      d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm64 328c0 13.25-10.75 24-24 24H152c-13.25 0-24-10.75-24-24V184c0-13.26 10.75-24 24-24h144c13.25 0 24 10.74 24 24v144zm96-20.6c0 10.2-11.68 16.16-20.16 10.32L352 287.5v-63l43.84-30.24c8.56-5.86 20.16.14 20.16 10.34v102.8z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgCircleVideo;

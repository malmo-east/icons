import * as React from "react";
import { SVGProps } from "react";

const SvgFileVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path
      className="file-video_svg__fa-primary"
      d="M256 0v128h128L256 0zm-64 256H96c-17.67 0-32 14.3-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.7-14.3-32-32-32zm103.5 15.3L256 296v80l39.52 24.7c10.68 6.7 24.48-1 24.48-13.6V284.9c0-12.6-13.8-20.3-24.5-13.6z"
    />
    <path
      d="M256 128V0H48C21.49 0 0 21.49 0 48v416c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V128H256zm-32 256c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-96c0-17.67 14.33-32 32-32h96c17.67 0 32 14.33 32 32v96zm96 3.1c0 12.57-13.82 20.23-24.48 13.57L256 376v-80l39.52-24.7c10.68-6.7 24.48 1 24.48 13.6v102.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFileVideo;

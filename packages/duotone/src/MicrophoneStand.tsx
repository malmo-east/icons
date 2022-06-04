import * as React from "react";
import { SVGProps } from "react";

const SvgMicrophoneStand = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="microphone-stand_svg__fa-primary"
      d="M289.5 60.47c-23.7 23.88-34.5 55.63-33 86.73l108.3 108.3c31.13 1.5 62.88-9.251 86.76-33l2.125-2.25L291.8 58.35l-2.3 2.12zm189-27c-44.76-44.63-117.3-44.63-162 0l-2.125 2.25 161.9 161.9 2.251-2.125C523.2 150.7 523.2 78.22 478.5 33.47zM224 495.1c0 9.8 7.1 16.9 16 16.9l31.98-.002c8.875 0 16.02-7.146 16.02-16.02l.003-171-64.01 57.95L224 495.1z"
    />
    <path
      d="M6.73 423.1c-9.375 10.63-8.875 26.63 1 36.63l44.51 44.38c9.875 10 26 10.5 36.63 1.125l275.9-249.8L256.5 147.2 6.73 423.1zM314.4 35.72l-22.63 22.63 161.9 161.9 22.63-22.63-161.9-161.9z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgMicrophoneStand;

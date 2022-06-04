import * as React from "react";
import { SVGProps } from "react";

const SvgShirtLongSleeve = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path
      className="shirt-long-sleeve_svg__fa-primary"
      d="M640 240.3V384c0 17.67-14.33 32-32 32h-32c-17.67 0-32-14.33-32-32V240.3l-2.062-7.898L496 150.4V448c0 35.35-28.65 64-64 64H208c-35.35 0-64-28.65-64-64V150.4l-45.97 82.1-2.03 7.8V384c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32V240.3c0-19.16 4.918-38 14.28-54.72l71.03-126.8A83.622 83.622 0 0 1 158.3 16H208c0 61.75 50.3 112 112 112S432 77.75 432 16h49.53c30.38 0 58.39 16.41 73.24 42.92l70.95 126.6A112.092 112.092 0 0 1 640 240.3z"
    />
    <path
      d="M320 128c-61.7 0-112-50.25-112-112h32c0 44.11 35.9 80 80 80s80-35.89 80-80h32c0 61.75-50.2 112-112 112z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgShirtLongSleeve;

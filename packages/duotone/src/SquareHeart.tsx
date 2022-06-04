import * as React from "react";
import { SVGProps } from "react";

const SvgSquareHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="square-heart_svg__fa-primary"
      d="m206.3 173 17.7 18 17.7-18c29.4-29.8 77.1-29.8 106.4 0 29.4 29.8 29.4 78.2 0 107.1L246.5 384.2c-6.2 6.3-14.4 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L99.87 280.1c-29.39-28.9-29.39-77.3 0-107.1 29.33-29.8 77.03-29.8 106.43 0z"
    />
    <path
      d="M384 32c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V96c0-35.35 28.65-64 64-64h320zM201.5 384.2c6.2 6.3 14.4 9.4 22.5 9.4s16.3-3.1 22.5-9.4l101.6-104.1c29.4-28.9 29.4-77.3 0-107.1-29.3-29.8-77-29.8-106.4 0L224 191l-17.7-18c-29.4-29.8-77.1-29.8-106.43 0-29.39 29.8-29.39 78.2 0 107.1L201.5 384.2z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSquareHeart;
import * as React from "react";
import { SVGProps } from "react";

const SvgBookFont = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="book-font_svg__fa-primary"
      d="M239.1 115.8 201.9 192h76.22l-39.02-76.2zM96 384h304c26.51 0 48-21.49 48-48V48c0-26.51-21.5-48-48-48H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1 0-18.6-14.3-32.9-32-32.9H97.4c-16.71 0-31.64-12.22-33.22-28.86C62.33 400.1 77.29 384 96 384zm33.7-119.2 96-192c5.438-10.84 23.19-10.84 28.62 0l96 192c3.953 7.906.75 17.52-7.156 21.47C340.9 287.5 338.4 288 336 288c-5.875 0-11.52-3.234-14.33-8.844L294.1 224H185.9l-27.6 55.2c-3.9 7.9-13.6 11-21.5 7.1-7.9-3.9-11.1-13.5-7.1-21.5z"
    />
    <path
      d="M400 384H96c-17.67 0-32 14.33-32 32s14.33 32 32 32h320v-66.94c-5.9 1.74-10.4 2.94-16 2.94z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBookFont;

import * as React from "react";
import { SVGProps } from "react";

const SvgBookBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="book-bookmark_svg__fa-primary"
      d="M64.15 419.1c1.588 16.64 16.51 28.85 33.23 28.85L416 448c17.67 0 32 14.33 32 31.1 0 18.6-14.3 32.9-32 32.9H96c-53.02 0-96-42.98-96-96V96C0 42.98 42.98 0 96 0h96v191.1c0 13.41 15.52 20.88 25.1 12.49L272 160l54 44.46c10.5 8.34 26 .94 26-13.36V0h48c26.5 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H96c-18.71 0-33.67 16.1-31.85 35.1z"
    />
    <path
      d="M400 384H96c-17.67 0-32 14.33-32 32s14.33 32 32 32h320v-66.94c-5.9 1.74-10.4 2.94-16 2.94z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBookBookmark;

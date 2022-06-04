import * as React from "react";
import { SVGProps } from "react";

const SvgBookBible = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path
      className="book-bible_svg__fa-primary"
      d="M96 384h304c26.51 0 48-21.49 48-48V48c0-26.51-21.5-48-48-48H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1 0-18.6-14.3-32.9-32-32.9H97.4c-16.71 0-31.64-12.22-33.22-28.86C62.33 400.1 77.29 384 96 384zm48-240c0-8.875 7.125-15.1 16-15.1l48-.9V80c0-8.875 7.125-15.1 16-15.1h32c8.875 0 16 7.12 16 15.1v48h48c8.875 0 16 7.121 16 15.1v32c0 8.875-7.125 16-16 16l-48 .9v112c0 8.875-7.125 16-16 16h-32c-8.875 0-16-7.127-16-16V192h-48c-8.875 0-16-7.127-16-16v-32z"
    />
    <path
      d="M400 384H96c-17.67 0-32 14.33-32 32s14.33 32 32 32h320v-66.94c-5.9 1.74-10.4 2.94-16 2.94z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgBookBible;

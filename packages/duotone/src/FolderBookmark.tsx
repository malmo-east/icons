import * as React from "react";
import { SVGProps } from "react";

const SvgFolderBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="folder-bookmark_svg__fa-primary"
      d="M448 335.1c0 13.42-15.52 20.88-25.1 12.49L368 305.3l-54 43.2c-10.5 8.3-26 .9-26-13.4V96h160v239.1z"
    />
    <path
      d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h160l64 64h16v239.1c0 13.42 15.52 20.88 25.1 12.49L368 305.3l54 43.2c10.5 8.3 26 .9 26-13.4V96h16c26.5 0 48 21.5 48 48z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgFolderBookmark;

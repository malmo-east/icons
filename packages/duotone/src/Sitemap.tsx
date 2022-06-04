import * as React from "react";
import { SVGProps } from "react";

const SvgSitemap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path
      className="sitemap_svg__fa-primary"
      d="M208 80c0-26.51 21.5-48 48-48h64c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48V80zm-96 240c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-64c0-26.5 21.49-48 48-48h64zm208 0c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h64zm208 0c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h64z"
    />
    <path
      d="M112 280c-4.4 0-8 3.6-8 8v32H56v-32c0-30.9 25.07-56 56-56h152v-40h48v40h152c30.9 0 56 25.1 56 56v32h-48v-32c0-4.4-3.6-8-8-8H312v40h-48v-40H112z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSitemap;

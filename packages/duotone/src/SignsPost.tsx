import * as React from "react";
import { SVGProps } from "react";

const SvgSignsPost = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path
      className="signs-post_svg__fa-primary"
      d="M441.4 64c4.2 0 8.3 1.69 11.3 4.69l48 48.01c6.2 6.2 6.2 16.4 0 22.6l-48 48c-3 3-7.1 4.7-11.3 4.7H63.1c-16.77 0-32-14.3-32-32V96c0-17.67 15.23-32 32-32h378.3zm6.6 160c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H70.63c-4.25 0-8.32-1.7-11.32-4.7l-48-48c-6.245-6.2-6.245-16.4 0-22.6l48-48c3-3 7.07-5.6 11.32-5.6L448 224z"
    />
    <path
      d="M224 32c0-17.67 14.3-32 32-32s32 14.33 32 32v32h-64V32zm64 160v32h-64v-32h64zm-32 320c-17.7 0-32-14.3-32-32V352h64v128c0 17.7-14.3 32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);

export default SvgSignsPost;

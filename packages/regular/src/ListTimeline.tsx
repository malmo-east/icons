import * as React from "react";
import { SVGProps } from "react";

const SvgListTimeline = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m147.3 84.69 43.3-43.32c6-6 14.2-9.37 22.7-9.37H416c17.7 0 32 14.33 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.7-3.4-22.7-9.4l-43.3-43.3c-6.2-6.2-6.2-16.36 0-22.61zM400 111.1v-32H219.9l-16 16 16 16H400zm-336-48c17.67 0 32 15.23 32 32 0 18.6-14.33 32-32 32s-32-13.4-32-32c0-16.77 14.33-32 32-32zm0 160c17.67 0 32 15.2 32 32 0 18.6-14.33 32-32 32s-32-13.4-32-32c0-16.8 14.33-32 32-32zM64 448c-17.67 0-32-14.3-32-32s14.33-32 32-32 32 14.3 32 32-14.33 32-32 32zm83.3-43.3 43.3-43.3c6-6 14.2-9.4 22.7-9.4H416c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.7-3.4-22.7-9.4l-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6zM400 432v-32H219.9l-16 16 16 16H400zM190.6 310.6l-43.3-43.3c-6.2-6.2-6.2-16.4 0-22.6l43.3-43.3c6-6 14.2-9.4 22.7-9.4H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H213.3c-8.5 0-16.7-3.4-22.7-9.4zm13.3-55.5 16 16H464v-32H219.9l-16 16z" />
  </svg>
);

export default SvgListTimeline;
